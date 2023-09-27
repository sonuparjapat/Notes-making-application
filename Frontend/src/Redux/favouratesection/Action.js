import axios from "axios"
import { favfail, favrequ, favsucc } from "./Action.types"

export const favrequest=()=>{
    return {type:favrequ}
}

export const favsuccess=(payload)=>{
    return {type:favsucc,payload}
}
export const favfailure=()=>{
    return {type:favfail}
}

export const favouratelist=(obj)=>(dispatch)=>{
    const token=sessionStorage.getItem("usertoken")
    dispatch(favrequest())
    return axios.post("url",obj,{
        headers:{
            "Authorization":`Bearer ${token}`,
    
     "Content-Type":"application/json"   }
    })
}