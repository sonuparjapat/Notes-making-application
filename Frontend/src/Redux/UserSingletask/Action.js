
import axios from "axios"
import { usersinginsucc } from "../UserSide/Authentication/UserLogin/ActionTypes"
import { usersingletaskreq, usersingtaskfail, usersingtasksucc } from "./ActionTypes"

export const usersingletaskrequest=()=>{
    return {type:usersingletaskreq}
}
export const usersingtasksuccess=(payload)=>{
    return {type:usersingtasksucc,payload}
}
export const usersingtaksfailure=()=>{
    return {type:usersingtaskfail}
}

export const usersingletask=(id)=>async(dispatch)=>{
    dispatch(usersingletaskrequest())
    const token=sessionStorage.getItem("usertoken")
   return await axios.get(`https://notesmaking.onrender.com/userpost/${id}`,{
        headers:{
            "Authorization":`Bearer ${token}`
        }
    })
}