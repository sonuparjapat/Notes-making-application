import { useredittaskfail, useredittaskreq, useredittasksucc } from "./ActionTypes"

import axios from "axios"
export const useredittaskrequest=()=>{
    return {type:useredittaskreq}
}
export const useredittasksuccess=()=>{
    return {type:useredittasksucc}
}

export const useredittaskfailure=()=>{
    return {type:useredittaskfail}
}

export const useredittask=(id,obj)=>async(dispatch)=>{
    dispatch(useredittaskrequest())
    const token=sessionStorage.getItem("usertoken")
   return await axios.patch(`https://notesmaking.onrender.com/userpost/editpost/${id}`,obj,{
        headers:{
            "Authorization":`Bearer ${token}`
        }
    })
}