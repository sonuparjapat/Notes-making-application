import React, { useEffect } from 'react'
import FavourateCarousel from './FavouratesCarousel'
import { Box,Text } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { getfavdata } from '../../Redux/favouratesection/Getfavourates/Action'
import { Remove } from '@mui/icons-material'
export default function FavouratePage() {
  const favourate=useSelector((state)=>state.favdatareducer)
  const {fav,favisLoading}=favourate
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getfavdata)
  },[])
  // console.log(fav)
  if(favisLoading){
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
      <Box ><button type="button" className="btn btn-danger" style={{marginLeft:"5px"}} ><Remove /></button></Box>      
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
