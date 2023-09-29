import { getfavfail, getfavreq, getfavsucc } from "./ActionTypes"

const initialdata={
    favisLoading:false,
    favisError:false,
    fav:[]
}
export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch(type){
        case getfavreq:{
            return {...state,favisLoading:true,favisError:false,fav:[]}
        }
        case getfavsucc:{
            return {...state,favisLoading:false,favisError:false,fav:payload}
        }
        case getfavfail:{
            return {...state,favisLoading:false,favisError:true,fav:[]}
        }
        default:{
            return state
        }
    }
}