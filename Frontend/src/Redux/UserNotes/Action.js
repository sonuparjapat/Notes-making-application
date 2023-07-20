import { gettaskfail, gettaskreq, gettasksucc } from "./ActionTypes"
import axios from "axios"
export const gettaskrequest=()=>{
    return {type:gettaskreq}
}
export const gettasksuccess=(payload)=>{
    return {type:gettasksucc,payload}
}
export const getaskfailure=(payload)=>{
    return {type:gettaskfail}
}


export const getusertask=(obj)=>(dispatch)=>{
    // console.log(obj)
    dispatch(gettaskrequest())
    const token=sessionStorage.getItem("usertoken")

axios.get("https://notesmaking.onrender.com/userpost",{
    params:obj.params,
   
    headers:{
        "Authorization":`Bearer ${token}`
    }
},obj).then((res)=>{
//    console.log(res)
    dispatch(gettasksuccess(res.data))
}).catch((errr)=>{
    dispatch(getaskfailure())
})}