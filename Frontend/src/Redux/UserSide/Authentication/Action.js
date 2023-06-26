import { signupfail, signupreq, signupsucc } from "./ActionTypes"
import axios from "axios"


export const signuprequest=()=>{
    return {type:signupreq}
}
export const signupsucess=(payload)=>{
    return {type:signupsucc,payload}
}
export const signupfailure=()=>{
    return {type:signupfail}
}


export const usersignup=(obj)=>async(dispatch)=>{
    dispatch(signuprequest())

  return await axios.post("https://notesmaking.onrender.com/user/register",obj
//   {
//     headers:{
//         "Content-Type":"multipart/form-data"
//     }
//   }
  )


}