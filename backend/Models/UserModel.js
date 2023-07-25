
const mongoose=require('mongoose')
require('dotenv').config()

const connection=mongoose.connect(process.env.MongoUrl)

const userSchema=mongoose.Schema({
name:{type:String,required:true},
   email:{type:String,required:true},
   password:{type:String,required:true},

})
const userModel=mongoose.model("notesmaking",userSchema)
module.exports={connection,userModel}