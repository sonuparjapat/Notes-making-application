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


export const usersignup=(obj)=>(dispatch)=>{
    dispatch(signuprequest())

    return axios.post("https://notesmaking.onrender.com/user/register",obj)


}