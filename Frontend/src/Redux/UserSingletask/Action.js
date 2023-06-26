
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

export const usersingletask=(id)=>(dispatch)=>{
    dispatch(usersingletaskrequest())
    const token=sessionStorage.getItem("usertoken")
    axios.get(`https://notesmaking.onrender.com/userpost/${id}`,{
        headers:{
            "Authorization":`Bearer ${token}`
        }
    }).then((res)=>{
        dispatch(usersingtasksuccess(res.data.data))
    }).catch((err)=>{
        dispatch(usersingtaksfailure())
    })
}