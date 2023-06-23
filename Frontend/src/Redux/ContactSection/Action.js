import axios from "axios"
import { contactfail, contactreq, contactsucc } from "./ActionTypes"

export const contactrequest=()=>{
    return {type:contactreq}
}
export const contactsuccess=()=>{
    return {type:contactsucc}
}
export const contactfailure=()=>{
    return {type:contactfail}
}

export const usercontact=(obj)=>(dispatch)=>{
    dispatch(contactrequest())
    return axios.post("https://notesmaking.onrender.com/user/send",obj)
}