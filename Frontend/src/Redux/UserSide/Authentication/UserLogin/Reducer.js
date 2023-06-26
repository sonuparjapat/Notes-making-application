import { usersigninfail, usersigninreq, usersinginsucc } from "./ActionTypes"


const initialdata={
    isLoading:false,
    isError:false,
   usertoken:"",
   "username":"",
   "useremail":"",
   "profileImage":""
}

export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch(type){
        case usersigninreq:{
            return {...state,isLoading:true,isError:false,usertoken:"",username:"",useremail:"", "profileImage":""}
        }
        case usersinginsucc:{
// console.log(payload)
            return {...state,isLoading:false,isError:false,usertoken:payload.token,username:payload.username,useremail:payload.useremail,profileImage:payload.profileImage}
        }
        case usersigninfail:{
            return {...state,isLoading:false,isError:true,usertoken:'',username:"",useremail:"", "profileImage":""}
        }
        default:{
            return state
        }
    }
}