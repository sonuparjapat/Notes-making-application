import { contactfail, contactreq, contactsucc } from "./ActionTypes"

const initialdata={
    isLoading:false,
    isError:false
}

export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch(type){
        case contactreq:{
            return {...state,isLoading:true,isError:false}
        }
        case contactsucc:{
            return {...state,isLoading:false,isError:false}
        }
        case contactfail:{
            return {...state,isLoading:false,isError:true}
        }
        default:{return state}
    }
}