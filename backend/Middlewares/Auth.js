
var jwt = require('jsonwebtoken');
// const cookieparser=require("cookie-parser")
const auth=async(req,res,next)=>{
    let token=req.headers.authorization
// console.log(req.cookies)
    if(token){
        try{
            jwt.verify(token.split(" ")[1], 'sonu', function(err, decoded) {
        if(decoded){
           req.body.authorId=decoded.authorId
            next()
        }else(
            res.status(400).json({msg:"wrong token"})
        )
              });
        }catch(err){
            res.status(400).json({msg:"!tokenexpired/wrong token provided"})
        }
    }else{
        res.status(400).json({msg:"Please login first"})
    }
}
module.exports={auth}