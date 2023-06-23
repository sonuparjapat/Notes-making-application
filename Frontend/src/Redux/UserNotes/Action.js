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


export const getusertask=(dispatch)=>{
    dispatch(gettaskrequest())
    const token=sessionStorage.getItem("usertoken")

axios.get("https://notesmaking.onrender.com/userpost",{
    headers:{
        "Authorization":`Bearer ${token}`
    }
}).then((res)=>{
    dispatch(gettasksuccess(res.data.data))
}).catch((errr)=>{
    dispatch(getaskfailure())
})}