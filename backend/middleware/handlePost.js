const cloudinary= require("../utils/cloudinary")
const Tweets =require("../models/tweets.modals")
const { v4: uuidv4 } = require('uuid');
const multer = require('multer');
const upload = multer();


const createProduct= async (req, res, next)=>{
    upload.none()(req, res, async (err)=>{
        if(err){
            console.log(err)
            return res.status(400).json({msg:"something went wrong! in redundant check middleware"})
        }
        if(req.images===undefined && req.content!=="")next()
    const {content, images, userId, tweetId}=req.body
    try {
        if(images){
            const result=await cloudinary.uploader.upload(images,{
                folder:"posts"
            })
            const tweet=await Tweets.create({
                content:content,
                images:{
                    url:result.secure_url,
                    public_id:result.public_id
                },
                userId:userId,
                tweetId:tweetId
            })
            tweet.save()
            next()
        }else{
            const tweet=await Tweets.create({
                content,content,
                images:{
                    url:"",
                    public_id:""
                },
                userId:userId,
                tweetId:uuidv4()
            })
            tweet.save();
            next()
        }
    } catch (error) {
        console.error("Error in handlePost"+error);
        res.status(500).json({msg:"Server Error in handlePost.js"})
    }
    })    
}



module.exports = createProduct;

