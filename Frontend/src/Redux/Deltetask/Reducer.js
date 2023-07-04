import { deletetaskfail, deletetaskreq, deletetasksucc } from "./ActionTypes"

const initialdata={
    isLoading:false,
    isError:false
}

export const reducer=(state=initialdata,action)=>{
    const {type}=action
    switch(type){
        case deletetaskreq:{
            return {...state,isLoading:true,isError:false}
        }
        case deletetasksucc:{
            return {...state,isLoading:false,isError:false}
        }
        case deletetaskfail:{
            return {...state,isLoading:false,isError:true}
        }
        default:{
            return state
        }
    }
}