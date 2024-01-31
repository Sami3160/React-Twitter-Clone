import mongoose from "mongoose";

const UserSchema=new mongoose.Schema({
    commentId:{
        type :String,
        required: true,
        unique:true,
        lowercase:true
    },
    tweetId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Tweets"
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    content: {
        type:String,
        required:true,
        max:200
    },
    likes:{
        type: Number,
        required: true
    }
},{timestamps:true})

export const User=mongoose.model("User",UserSchema);