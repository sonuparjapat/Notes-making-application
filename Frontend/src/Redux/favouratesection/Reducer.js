
import { favfail, favrequ, favsucc } from "./Action.types"

const initialdata={
    isLoading:false,
    isError:false
}

export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch(type){
        case favrequ:{
            return {...state,isLoading:true,isError:false}
        }
        case favsucc:{
            return {...state,isLoading:false,isError:false}

        }
        case favfail:{
            return {...state,isLoading:false,isError:true}
        }
        default{
            return state
        }
    }
}