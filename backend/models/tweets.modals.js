const mongoose=require("mongoose")

const TweetsSchema=new mongoose.Schema({
    tweetId:{
        type:String,
        required: true,
        unique:true,
        lowercase:true
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    content: {
        type:String,
        default:"",
        max:200
    },
    images: {
        public_id:{
            type: String,
            default:""
        },url:{
            type:String,
            default:""
        }
    },
    likes:{
        type: Number,
        default:0
    },
    retweets:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Tweets"
    }]
},{timestamps:true})

const Tweets=mongoose.model("Tweets",TweetsSchema)
module.exports={Tweets}