import axios from "axios"
import { favfail, favrequ, favsucc } from "./Action.types"

export const favrequest=()=>{
    return {type:favrequ}
}

export const favsuccess=()=>{
    return {type:favsucc}
}
export const favfailure=()=>{
    return {type:favfail}
}

export const favourate=(id,obj)=>(dispatch)=>{
    console.log()
    const token=sessionStorage.getItem("usertoken")
    dispatch(favrequest())
    return axios.patch(`https://notesmaking.onrender.com/userpost/addtofavourate/${id}`,obj,{
        headers:{
            "Authorization":`Bearer ${token}`,
    
     "Content-Type":"application/json"   }
    })
}