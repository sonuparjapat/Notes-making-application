import { gettaskfail, gettaskreq, gettasksucc } from "./ActionTypes"


const initialdata={
    isLoading:false,
    isError:false,
    usernotes:[]
}

export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch(type){
        case gettaskreq:{
            return {...state,isLoading:true,isError:false,usernotes:[]}
        }
        case gettasksucc:{
            console.log(payload)
            return {...state,isLoading:false,isError:false,usernotes:payload}
        }
        case gettaskfail:{
            return {...state,isLoading:false,isError:true,usernotes:[]}
        }
        default:{
            return state
        }
    }
}