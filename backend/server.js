const express=require("express")
const cors=require("cors");
const { v4: uuidv4 } = require('uuid');
const jwt=require("jsonwebtoken");
const cookieParser=require("cookie-parser");    
const app=express();
const {User}=require("./models/user.modals")
const {loginCheck , authCheck} = require("./middleware/user_verify")
const mongoose = require('mongoose');
const redundantCheck=require("./middleware/duplicateRecords")
require('dotenv').config();


mongoose.connect(process.env.MONGOOSE_URL)
.then(()=>{
    console.log("connection done")
}).catch((err)=>{
    console.log("Connection not done : ",err)
})
app.use(cors());
app.use(express.json());
app.use(cookieParser())

app.post("/login", loginCheck ,async (req,res)=>{
    // let oldToken=req.cookies.token
    // let decode=jwt.decode(oldToken, secret)
    let userData=null
    if(req.body.username){
        userData=await User.findOne({username:req.body.username})
    }
    if(req.body.email){
        userData=await User.findOne({email:req.body.email})
    }
    let token=jwt.sign({username: userData.email}, "secret", { expiresIn: '6h' })
    res.status(200).cookie('token', token, {httpOnly:true, secure:true})
    res.json({data:userData, token:token})
})
app.post("/", authCheck ,async(req,res)=>{
        const email=req.user.email
        try {
            const userData=await User.findOne({email});
            res.status(200).json({data:userData})
        } catch (error) {
            res.status(500).json({msg:"server error [/]"})
        }
})

app.post("/signup",redundantCheck,async (req,res)=>{
    const email=req.body.email
    const username=req.body.username
    const password=req.body.password
    try {
    const user= await User.create({
        userId:uuidv4(),
        username:username,
        email:email,
        password:password,
        bio:""
    })
    const userData=await User.findOne({email})
    const token=jwt.sign({email},process.env.JWT_SECRET, { expiresIn: '6h' })
    res.cookie('token',token, {httpOnly:true, secure:true})
    res.status(200).json({data:userData, token:token})
        
    } catch (error) {
        console.log("error in signup",error)
        if(error instanceof mongoose.Error.ValidationError){
            res.status(400).json({msg:"invalid email or password[/signup]"})
        }else if(error.code===11000){
            res.status(400).json({msg:"email already exist[/signup]"})
        }else{
            res.status(500).json({msg:"server error [/signup]"})
        }
    }
    
})

app.listen(5000,()=>{
    console.log("server is running on port 5000")
});