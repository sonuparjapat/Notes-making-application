import { useredittaskfail, useredittaskreq, useredittasksucc } from "./ActionTypes"

const initialdata={
    isLoading:false,
    isError:false,
    data:{}
}

export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch(type){
        case useredittaskreq:{
            return {...state,isLoading:true,isError:false,data:{}}
        }
        case useredittasksucc:{
            return {...state,isLoading:false,isError:false,data:payload}
        }
        case useredittaskfail:{
            return {...state,isLoading:false,isError:true,data:{}}
        }
        default:{
            return state
        }
    }
}