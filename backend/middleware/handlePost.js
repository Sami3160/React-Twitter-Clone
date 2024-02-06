const cloudinary= require("../utils/cloudinary")
const Tweets =require("../models/tweets.modals")


const createProduct= async (req, res, next)=>{
    if(req.images===undefined && req.content!=="")next()
    const {content, images, userId}=req.body
    try {
        if(images){
            const result=cloudinary.uploader.upload(images,{
                folder:"posts"
            })
            const tweet=await Tweets.create({
                content,
                images:{
                    url:result.secure_url,
                    public_id:result.public_id
                },
                userId,
                tweetId:uuidv4()
            })
        }else{
            const tweet=await Tweets.create({
                content,
                images:{
                    url:"",
                    public_id:""
                },
                userId,
                tweetId:uuidv4()
            })
        }
    } catch (error) {
        
    }

}


export default createProduct;

