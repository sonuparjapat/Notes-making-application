import axios from "axios"
import { useraddtaskfail, useraddtaskreq, useraddtasksucc } from "./ActionTypes"

export const useraddtaskrequest=()=>{
    return {type:useraddtaskreq}
}
export const useraddtasksuccess=()=>{
    return {type:useraddtasksucc}
}
export const useraddtaskfailure=()=>{
    return {type:useraddtaskfail}
}

export const useraddtask=(obj)=>(dispatch)=>{
    dispatch(useraddtaskrequest())
    const token = sessionStorage.getItem("usertoken")

    return axios.post("https://notesmaking.onrender.com/userpost/addtask",obj,{
        headers:{
            "Authorization":`Bearer ${token}`
        }
    })
}