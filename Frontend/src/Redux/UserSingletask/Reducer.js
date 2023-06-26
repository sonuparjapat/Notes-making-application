import { usersingletaskreq, usersingtaskfail, usersingtasksucc } from "./ActionTypes"


const initialdata={
    isLoading:false,
    isError:false,

data:[]
}
export const reducer=(state=initialdata,{type,payload})=>{
    switch(type){
        case usersingletaskreq:{
            return {...state,isLoading:true,isError:false,data:[]}
        }
        case usersingtasksucc:{
            return {...state,isLoading:false,isError:false,data:payload}
        }
        case usersingtaskfail:{
            return {...state,isLoading:false,isError:true,data:[]}
        }
        default:{
            return state
        }
    }
}