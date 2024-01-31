const jwt=require("jsonwebtoken");
const secret="secret123"
const zod=require("zod")
import {User} from "../data modals/user.modals"


let emailSchema=zod.string().email()
let passwordSchema=zod.string().min(6).max(12)

function verifyToken(token){
    try {
        let status=jwt.verify(token, secret)
        if(status)return {success:true}
        return {success:false}
    } catch (error) {
        return {success: false}
    }
}


function authCheck(req, res, next){
    let oldToken=req.cookies.token
    if(!oldToken){
        res.status(401).json({msg:"new user detected"})
    }
    let result=verifyToken(oldToken)
    if(result.success){
        // let decode=jwt.decode(oldToken, secret)
        // let token=jwt.sign({email: decode.email}, "secret", { expiresIn: '6h' })
        // res.status(200).cookie('token', token, {httpOnly:true, secure:true})
        // res.json({msg:"cookien added"})
        next()
    }else{
        res.status(401).json({msg:"session is over"})
    }
}


async function loginCheck(req, res, next){
    let email=req.body.email
    let password=req.body.email
    let username=req.body.username
    let e=emailSchema.safeParse(email).success
    let p=emailSchema.safeParse(email).success
    let u=emailSchema.safeParse(email).success
    if(email){
        if(e==false||p==false){
            res.status(400).json({msg:"invalid email or password"})
        }
    }
    if(username){
        if(e==false||p==false){
            res.status(400).json({msg:"invalid email or password"})
        }
    }
    try {
        let data;
        if(username)data= User.findOne({username, password})
        if(email)data= User.findOne({email, password})
        if(data){
            // res.status(200).json({msg:"User auth done"})
            next()
        }else{
            res.status(401).json({msg:"User turn out to be bhawda"})
        }
    } catch (error) {
        console.log("error in admin middleware  ",error)
        res.status(500).json({msg:"error in middleware"})
    }
}

export {loginCheck, authCheck}