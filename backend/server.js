const express = require("express")
const cors = require("cors");
const { v4: uuidv4 } = require('uuid');
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const app = express();
const { User } = require("./models/user.modals")
const { loginCheck, authCheck } = require("./middleware/user_verify")
const mongoose = require('mongoose');
const redundantCheck = require("./middleware/duplicateRecords")
const cloudinary = require("./utils/cloudinary");
const handlePost = require("./middleware/handlePost")
require('dotenv').config();
const multer = require('multer');
const upload = multer();

mongoose.connect(process.env.MONGOOSE_URL)
    .then(() => {
        console.log("connection done")
    }).catch((err) => {
        console.log("Connection not done : ", err)
    })
app.use(cors());
app.use(express.json());
app.use(cookieParser())

app.post("/login", loginCheck, async (req, res) => {
    // let oldToken=req.cookies.token
    // let decode=jwt.decode(oldToken, secret)
    let userData = null
    if (req.body.username) {
        userData = await User.findOne({ username: req.body.username })
    }
    if (req.body.email) {
        userData = await User.findOne({ email: req.body.email })
    }
    let token = jwt.sign({ username: userData.username }, process.env.JWT_SECRET, { expiresIn: '6h' })
    res.status(200).cookie('token', token, { httpOnly: true, secure: true })
    res.json({ data: userData, token: token })
})
app.post("/", authCheck, async (req, res) => {
    const data = jwt.decode(req.cookies.token, process.env.JWT_SECRET).username
    try {
        const userData = await User.findOne({ username: data }, { email: 1, username: 1, _id: 0 });
        console.log(userData)
    } catch (error) {
        res.status(500).json({ msg: "server error [/]" })
    }
})

app.post("/signup", redundantCheck, async (req, res) => {
    const email = req.body.email
    const username = req.body.username
    const password = req.body.password
    const defaultPic = "https://res.cloudinary.com/drixlrait/image/upload/v1707233709/xy9ijczoaxw07i0ctwti.jpg"
    const profilePic = req.body.profilePic;

    try {
        if (profilePic) {
            const result = await cloudinary.uploader.upload(profilePic, {
                folder: "profile"
            })
        } else {
            const result = await cloudinary.uploader.upload(defaultPic, {
                folder: "profile"
            })
        }
    } catch (error) {
        console.log("error in cloudinary", error)
    }

    try {
        const user = await User.create({
            userId: uuidv4(),
            username: username,
            email: email,
            password: password,
            bio: ""
        })
        const userData = await User.findOne({ email })
        const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '24h' })
        res.cookie('token', token, { httpOnly: true, secure: true })
        res.status(200).json({ data: userData, token: token })

    } catch (error) {
        console.log("error in signup", error)
        if (error instanceof mongoose.Error.ValidationError) {
            res.status(400).json({ msg: "invalid email or password[/signup]" })
        } else if (error.code === 11000) {
            res.status(400).json({ msg: "email already exist[/signup]" })
        } else {
            res.status(500).json({ msg: "server error [/signup]" })
        }
    }

})

app.post("/upload", upload.single('file'), async (req, res) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.path)
        res.status(200).json({ result })
    } catch (error) {
        console.log("error in cloudinary", error)
    }
}
)

app.post("/logout", (req, res) => {
    res.clearCookie('token')
    res.status(200).json({ msg: "cookie cleared" })
})

app.post("/posts", handlePost, async (req, res) => {
    const { content, images, userId, tweetId } = req.body;
    const result = await Tweets.findOne({ tweetId })
    if (result) {
        res.send(200).json({ result })
    }
})


app.post("/api", async (req, res) => {
    const { email, username } = req.body
    if (email) {
        console.log(email)
        const emailFound = await User.findOne({ email })
        if (emailFound) return res.status(200).json({ msg: "email found in db" })
    }
    if (username) {
        console.log(username);
        const unameFound = await User.findOne({ username })
        if (unameFound) return res.status(200).json({ msg: "username found in db" })
    } else {
        res.status(400).json({ msg: "could not find any account" })
    }
})

app.listen(5000, () => {
    console.log("server is running on port 5000")
});