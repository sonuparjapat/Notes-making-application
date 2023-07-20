export function useDebounce(fun,time){
  
let id;
    return (...args)=>{
        id&&clearTimeout(id)
        id=setTimeout(()=>{
            fun.apply(this,args)
        },time)
    }

}