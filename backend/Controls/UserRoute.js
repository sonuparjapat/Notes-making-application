
const express=require("express")
const nodemailer = require("nodemailer");
const { userModel } = require("../Models/UserModel")
const bcrypt = require('bcrypt');
const path = require('path');
const multer  = require('multer')

var jwt = require('jsonwebtoken');
const userRouter=express.Router()
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     return cb(null, "./uploads/Images")
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + '-' + file.originalname
//     // console.log(file)
//   return  cb(null, uniqueSuffix)
//   }
// })

// const upload = multer({ storage})


userRouter.get("/",async(req,res)=>{
    try{
        const data=await userModel.find()
        res.status(200).json({"data":data})
    }catch(err){
        res.status(200).json({msg:"something going wrong"})
    }
})

// ,upload.single('profileImage') use it in between
userRouter.post("/register",async(req,res)=>{

    const {email,password,name}=req.body
    // const profileImage = req.file ? req.file.filename : null;
    // console.log(profileImage)
    const data=await userModel.findOne({email})
    // console.log(req.file)
    if(data){
        res.status(400).json({msg:"Already Regitered user"})
    }
    else{
        try{
            bcrypt.hash(password,5, async(err, hash)=> {
                if(err){
                    res.status(400).json({msg:"something going wrong"})
                }else{
                    const userdata=new userModel({email,password:hash,name})
                    await userdata.save()
                    res.status(200).json({msg:"Registerd Successfully"})
                }
               
            });
       
        }catch(err){
            res.status(400).json({msg:"something going wrong"})
        }
    }
})

userRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body
    const userdata=await userModel.findOne({email})
 
    if(userdata){
        try{
            bcrypt.compare(password,userdata.password, function(err, result) {
            if(result){
                var token = jwt.sign({ authorId:userdata._id }, 'sonu',{ expiresIn: 60 * 60 });
                res.cookie("userjwt",token,{expires:new Date(Date.now()+1800000),httpOnly:true})
            
                res.status(200).json({msg:"Login successfully","token":token,username:userdata.name,useremail:userdata.email,profileImage:userdata.profileImage})
            }else{
                res.status(400).json({msg:"password mistmatch"})
            }
            });
          }catch(err){
            res.status(400).json({msg:"something going wrong"})
          }
    }else{
        res.status(400).json({msg:"No data found with this email"})
    }
  

})


// contactus seciton
userRouter.post('/send', (req, res) => {
    // Retrieve the form data from the request body
    const { name, email, message } = req.body;
  
    // Implement the logic to send an email using a Node.js email library like Nodemailer
    // Here's a basic example using Nodemailer
    const transporter = nodemailer.createTransport({
      // Configure your email provider settings
      service: 'gmail',
      auth: {
        user: 'sonu992000parjapat@gmail.com',
        pass: 'djxtqalkcgbjopoy'
      }
    });
  
    const mailOptions = {
      from: email,
      to: "sonu992000parjapat@gmail.com",
      subject: 'Query from MyNotes application user',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<b>Name: ${name}<br> From: ${email}<br>Message:-<br> ${message}</b>`, 
    };
  
   transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ message: 'Failed to send email' });
      }
  
      // Email sent successfully
      return res.status(200).json({ message: 'Email sent successfully' });
    });
  });

















module.exports={userRouter}