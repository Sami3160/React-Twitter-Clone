const {User}=require("../models/user.modals")
const multer = require('multer');
const upload = multer();

const redundantCheck=async(req, res, next)=>{ 
    upload.none()(req, res, async (err)=>{
        if(err){
            console.log(err)
            return res.status(400).json({msg:"something went wrong! in redundant check middleware"})
        }
        const username=req.body.username;
        const unameExists=await User.findOne({username})
        if(unameExists)return res.status(400).json({msg:"username already exists"})
        const email=req.body.email;
        const emailExists=await User.findOne({email})
        if(emailExists)return res.status(400).json({msg:"email already exists!"})
        next()
    })
}

module.exports=redundantCheck