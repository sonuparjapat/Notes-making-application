import { useraddtaskfail, useraddtaskreq, useraddtasksucc } from "./ActionTypes"

const initialdata={
    isLoading:false,
    isError:false
}

export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch(type){
        case useraddtaskreq:{
            return {...state,isLoading:true,isError:false}
        }
        case useraddtasksucc:{
            return {...state,isLoading:false,isError:false}
        }
        case useraddtaskfail:{
            return {...state,isLoading:false,isError:true}
        }
        default:{return state}
    }
}