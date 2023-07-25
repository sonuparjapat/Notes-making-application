const express=require("express")
const { userModel } = require("../Models/UserModel")
const { UserpostModel } = require("../Models/UserPost")

const userPostRouter=express.Router()

userPostRouter.get("/",async(req,res)=>{
    const {authorId}=req.body
    const {page,limit,date,task,order,sort,}=req.query
let query={"authorId":authorId}
if(date){
    query.date=date
}
if(task){
    query.task={ $regex: task,$options: "i"  }
}
let sorting={}
if(order=="asc" &&sort){
    sorting.date=1
}else if(order=="desc"&&sort){
    sorting.date=-1
}
try{
    const mydata=await UserpostModel.find(query)
if(typeof sorting==undefined){

    const data=await UserpostModel.find(query).skip((page-1)*limit).limit(limit)
    res.status(200).json({"data":data,total:limit&&page?Math.ceil(mydata.length/limit):mydata.length})
}else{
    const data=await UserpostModel.find(query).sort(sorting).skip((page-1)*limit).limit(limit)
res.status(200).json({"data":data,total:limit&&page?Math.ceil(mydata.length/limit):mydata.length})
}


}catch(err){
    res.status(400).json({msg:"something going wrong"})
}
})
userPostRouter.get("/:id",async(req,res)=>{
    const {id}=req.params
 const authorid=req.authorId
const query={
    _id:id,
    authorid:authorid
}
try{
    const data=await UserpostModel.find(query)
    res.status(200).json({"data":data})
}catch(err){
    res.status(400).json({msg:"something going wrong"})
}

})
userPostRouter.post("/addtask",async(req,res)=>{

    const {task,description,date}=req.body

    try{
        const data=new UserpostModel(req.body)
        await data.save()
        res.status(200).json({msg:"Task added successfully"})

    }catch(err){
        res.status(400).json({msg:"something going wrong"})
    }
})

userPostRouter.patch("/editpost/:id",async(req,res)=>{

const {id}=req.params
const data=await UserpostModel.findOne({_id:id})
console.log(data)

try{
if(req.body.authorId!==data.authorId){
     res.status(400).json({msg:"!!sorry you are not authorized to do this task"})

}else{
    
  await UserpostModel.findOneAndUpdate({_id:id},req.body)
    res.status(200).json({msg:"updated successfully"})
}
}catch(err){
    res.status(400).json({msg:"something going wrong"})
}


})
userPostRouter.delete("/deletepost/:id",async(req,res)=>{
    const {id}=req.params
    const data=await UserpostModel.findOne({_id:id})
    try{
if(data.authorId!==req.body.authorId){
    res.status(400).json({msg:"you are not authorised to do that task"})
}else{
    await UserpostModel.findOneAndDelete({_id:id})
    res.status(200).json({msg:"Deleted successfully"})
}
    }catch(err){
        res.status(400).json({msg:"something going wrong"})
    }

})
module.exports={userPostRouter}