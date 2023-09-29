import axios from "axios"
import { getfavfail, getfavreq, getfavsucc } from "./ActionTypes"

export const getfavrequest=()=>{
    return {type:getfavreq}
}
export const getfavsuccess=(payload)=>{
    return {type:getfavsucc,payload}
}
export const getfavfailure=()=>{
    return {type:getfavfail}
}


export const getfavdata=(dispatch)=>{
    dispatch(getfavrequest())
    const token=sessionStorage.getItem("usertoken")

    axios.get("https://notesmaking.onrender.com/favourate/favdata",{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
    }).then((res)=>{
        dispatch(getfavsuccess(res.data.msg))
    }).catch((err)=>{
        dispatch(getfavfailure())
    })
}