const express=require("express")
const cors=require("cors");
const jwt=require("jsonwebtoken");
const cookieParser=require("cookie-parser");    
const app=express();
import {loginCheck , authCheck} from "./middleware/user_verify"
import { User } from "./data modals/user.modals";
import mongoose from "mongoose";
require('dotenv').config();


mongoose.connect("mongodb+srv://admin:root@cluster0.od8zpg8.mongodb.net/")
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
    res.json({msg:"cookien added"})
})
app.post("/", authCheck ,(req,res)=>{
        
})

app.post("/signup", (req,res)=>{
        
})

app.listen(5000,()=>{
    console.log("server is running on port 5000")
});