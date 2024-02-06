const mongoose=require("mongoose")

const UserSchema=new mongoose.Schema({
    userId:{
        type :String,
        required: true,
        unique:true,
        lowercase:true
    },
    username:{
        type :String,
        required: true,
        unique:true,
        lowercase:true
    },
    email:{
        type:String,
        required:  true,
        unique: true,
    },
    password:{
        type : String,
        min:6,
        max:12,
        required: true
    },
    bio:{
        type:String,
    },
    followers:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }],
    following:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }]
})
const User=mongoose.model("User",UserSchema);
module.exports={User}
