const jwt=require("jsonwebtoken");
const secret="secret123"
const zod=require("zod")
const {User}=require("../models/user.modals")


let emailSchema=zod.string().email()
let passwordSchema=zod.string().min(6).max(12)
let usenameSchema=zod.string().min(3).max(12)

function verifyToken(token){
    try {
        let status=jwt.verify(token, process.env.JWT_SECRET)
        if(status)return {success:true}
        return {success:false}
    } catch (error) {
        return {success: false}
    }
}


function authCheck(req, res, next){
    let oldToken=req.cookies.token
    if(!oldToken){
        return res.status(401).json({msg:"new user detected"})
    }
    let result=verifyToken(oldToken)
    if(result.success){
        // let decode=jwt.decode(oldToken, secret)
        // let token=jwt.sign({email: decode.email}, "secret", { expiresIn: '6h' })
        // res.status(200).cookie('token', token, {httpOnly:true, secure:true})
        // res.json({msg:"cookien added"})
        req.user=jwt.decode(oldToken, process.env.JWT_SECRET)
        next()
    }else{
        return res.status(401).json({msg:"session is over"})
    }
}


async function loginCheck(req, res, next){
    let email=req.body.email
    let password=req.body.password
    let username=req.body.username
    let e=emailSchema.safeParse(email).success
    let p=passwordSchema.safeParse(password).success
    let u=usenameSchema.safeParse(username).success
    if(email){
        if(e==false||p==false){
            return res.status(400).json({msg:"invalid email or password"})
        }
    }
    if(username){
        if(u==false||p==false){
            return res.status(400).json({msg:"invalid email or password"})
        }
    }
    try {
        let data;
        if(username)data=await User.findOne({username, password})
        if(email)data=await User.findOne({email, password})
        if(data){
            // res.status(200).json({msg:"User auth done"})
            const token=jwt.sign({email}, process.env.JWT_SECRET, { expiresIn: '6h' })
            res.cookie('token', token, {httpOnly:true, secure:true})
            req.user=data
            next()
        }else{
            return res.status(401).json({msg:"User turn out to be bhawda"})
        }
    } catch (error) {
        console.log("error in admin middleware  ",error)
        return res.status(500).json({msg:"error in middleware"})
    }
}

module.exports={loginCheck, authCheck}