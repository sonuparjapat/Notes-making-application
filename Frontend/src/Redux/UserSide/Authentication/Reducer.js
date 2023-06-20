import { useActionData } from "react-router-dom"
import { signupfail, signupreq, signupsucc } from "./ActionTypes"


const initialdata={
    isLoading:false,
    isError:false,

}


export const reducer=(state=initialdata,aciton)=>{
    const {type,payload}=aciton
    switch(type){
        case signupreq:{
            return {...state,isLoading:true,isError:false}
        }
        case signupsucc:{
            return {...state,isLoading:false,isError:false}
        }
        case signupfail:{
            return {...state,isLoading:false,isError:true}
        }
        default:{
            return state
        }
    }
}