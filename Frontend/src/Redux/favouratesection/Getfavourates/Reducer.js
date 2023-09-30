import { getfavfail, getfavreq, getfavsucc } from "./ActionTypes"

const initialdata={
    getfavisLoading:false,
    getfavisError:false,
    fav:[]
}
export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch(type){
        case getfavreq:{
            return {...state,getfavisLoading:true,getfavisError:false,fav:[]}
        }
        case getfavsucc:{
            return {...state,getfavisLoading:false,getfavisError:false,fav:payload}
        }
        case getfavfail:{
            return {...state,getfavisLoading:false,getfavisError:true,fav:[]}
        }
        default:{
            return state
        }
    }
}