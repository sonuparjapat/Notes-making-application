const express=require("express")
const { userRouter } = require("./Controls/UserRoute")
const { connection } = require("./Models/UserModel")
const {auth}=require("./Middlewares/Auth")
const cors=require("cors")
const cookieparser=require("cookie-parser")
const { userPostRouter } = require("./Controls/userPostRoute")



const app=express()


app.use(cors())
app.use(express.json())
app.use(cookieparser())

app.use("/user",userRouter)

app.use(auth)
app.use("/userpost",userPostRouter)

app.listen(8080,async()=>{
    try{
        await connection
        console.log("connected to database")
    }catch(err){
        console.log(err)
    }
    console.log("server is running at port 8080")
})