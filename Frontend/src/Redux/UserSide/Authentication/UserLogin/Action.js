import axios from "axios"
import { usersigninfail, usersigninreq, usersinginsucc } from "./ActionTypes"


export const usersigninrequest=()=>{
    return {type:usersigninreq}
}
export const usersignsuccess=(payload)=>{
    return {type:usersinginsucc,payload}
}
export const usersigninfailure=()=>{
    return {type:usersigninfail}
}


export const usersignin=(obj)=>(dispatch)=>{
    dispatch(usersigninrequest())
    return axios.post("https://notesmaking.onrender.com/user/login",obj)
}