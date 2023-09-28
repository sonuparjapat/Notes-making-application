
import { favfail, favrequ, favsucc } from "./Action.types"

const initialdata={
    favisLoading:false,
    favisError:false
}

export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch(type){
        case favrequ:{
            return {...state,favisLoading:true,favisError:false}
        }
        case favsucc:{
            return {...state,favisLoading:false,favisError:false}

        }
        case favfail:{
            return {...state,favisLoading:false,favisError:true}
        }
        default:{
            return state
        }
    }
}