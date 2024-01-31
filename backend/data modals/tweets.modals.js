import mongoose, { Schema, mongo } from "mongoose";

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
        max:200
    },
    likes:{
        type: Number,
        required: true
    },
    retweets:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Tweets"
    }]
},{timestamps:true})

export const Tweets=mongoose.model("Tweets",TweetsSchema)