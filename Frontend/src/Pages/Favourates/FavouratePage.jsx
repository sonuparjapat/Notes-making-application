import React, { useEffect, useState } from 'react'
import FavourateCarousel from './FavouratesCarousel'
import { Box,Text,Tooltip, useToast,Center } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { getfavdata } from '../../Redux/favouratesection/Getfavourates/Action'
import { Remove } from '@mui/icons-material'
import { favfailure, favourate, favsuccess } from '../../Redux/favouratesection/Action'
export default function FavouratePage() {
  const favouratealldata=useSelector((state)=>state.favdatareducer)
  const {fav,getfavisLoading,getfavisError}=favouratealldata
  const [foranychange,setForanychange]=useState(false)
  const changingfavstatus=useSelector((state)=>state.favouratereducer)
  const {favisLoading}=changingfavstatus
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getfavdata)
  },[foranychange])
// console.log(foranychange)
  // handleremoving from favourates
  const toast=useToast()
  const handleremove=(id,fav)=>{
    const obj={"favourate":fav}
    dispatch(favourate(id,obj)).then((res)=>{
      toast({description:res.data.msg,status:"success",position:'top',duration:2000})
      setForanychange(!foranychange)
dispatch(favsuccess())
    }).catch((err)=>{
      toast({description:err.response.data.msg,status:"error","position":"top",duration:2000})
      dispatch(favfailure())
    })
  }
  if(getfavisLoading){
    return (
    
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"} width="100%" >
      <div className="spinner-grow text-primary" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
  <div className="spinner-grow text-secondary" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
  <div className="spinner-grow text-success" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
  <div className="spinner-grow text-danger" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
  <div className="spinner-grow text-warning" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
  <div className="spinner-grow text-info" role="status">
    <span className="visually-hidden">Loading...</span>
  </div></Box>
    )
  }
  else if(getfavisError){
    return (
      <Center height="100vh">Something going wrong ...</Center>
    )
  }
  return (
    <>
    <FavourateCarousel/>
    <Box  display="flex"  mt="20px" justifyContent="center" alignItems={"center"} ><Text color={"red"}  textAlign="center" fontSize={["15px","20px","30px","30px","30px"]} fontWeight={600} fontStyle={"bold"}  display={"inline"}>FIND</Text><Text paddingLeft={"5px"} display={"inline"} color={"black"}  textAlign="center" fontSize={["15px","20px","30px","30px","30px"]} fontWeight={600} fontStyle={"bold"}>YOUR FAVOURATES HERE</Text>
    </Box>
    <Box>
{typeof fav!=="undefined"&&fav.length>=1?fav.map((el,index)=>{
return (

      <Box w={["90%","90%","90%","80%","80%"]} margin="auto" className="card" style={{marginTop:"10px"}} key={el._id}>
      <Box  display={"flex"} justifyContent={"space-between"} className="card-header" >
        <Box ><h5 >Created on:-{el.date}</h5></Box>
      <Box >
        
     
        
        <button onClick={()=>handleremove(el._id,el.favourate)} type="button" className="btn btn-danger" style={{marginLeft:"5px"}} >
          {favisLoading?"Removing..":  <Tooltip label={el.favourate?"Remove from favourates":"Add to favourates"} >
      <Remove />
</Tooltip>}
      
          </button> </Box>      
        </Box>   
         <div className="card-body">
           <div>
        <Box display={"flex"} justifyContent={"space-between"}>
       <Box> <h5 className="card-title">{el.task}</h5></Box>
        <Box    display={"flex"} justifyContent={"center"} alignItems={"center"}>
          
         
         
         </Box>
          </Box>   
           <p className="card-text">{el.description}</p></div>
       
         </div>
       </Box>
 
)

}):
<Box display="flex"  mt="20px" justifyContent="center" alignItems={"center"} ><Text color={"red"}  textAlign="center" fontSize={["15px","20px","30px","30px","30px"]} fontWeight={600} fontStyle={"bold"}  display={"inline"}>NO</Text><Text paddingLeft={"5px"} display={"inline"} color={"black"}  textAlign="center" fontSize={["15px","20px","30px","30px","30px"]} fontWeight={600} fontStyle={"bold"}>Data Found!!</Text></Box>}
        
    </Box>
    </>
  )
}
