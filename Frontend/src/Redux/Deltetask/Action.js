import axios from "axios"
import { deletetaskfail, deletetaskreq, deletetasksucc } from "./ActionTypes"

export const deletetaskrequest=()=>{
    return {type:deletetaskreq}
}
export const deletetasksuccess=()=>{
    return {type:deletetasksucc}
}
export const deletetaskfailure=()=>{
    return {type:deletetaskfail}
}
export const deletetask=(id)=>(dispatch)=>{
    dispatch(deletetaskrequest())
    let token=sessionStorage.getItem("usertoken")
    return axios.delete(`https://notesmaking.onrender.com/userpost/deletepost/${id}`,{
        headers:{
            "Authorization":`Bearer ${token}`
        }
    })
}