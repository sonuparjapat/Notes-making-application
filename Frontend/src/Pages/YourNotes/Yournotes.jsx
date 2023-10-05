import { Box, Button, Center, Checkbox, Input, Select, Toast, useToast } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Delete, Edit, Favorite, FavoriteBorderOutlined } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { getusertask } from '../../Redux/UserNotes/Action'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import empty from "./Empty/pexels-messala-ciulla-942872.jpg"
import Footer from '../Footer/Footer'
import { deletetask } from '../../Redux/Deltetask/Action'
import FilteringComponent from './FilteringComponent'
// import { ThemeProvider } from 'styled-components'
// import { createTheme } from '@mui/material'
import {Pagination} from '@mui/material'
import Pagin from './Pagination'
import { favfailure, favourate, favsuccess } from '../../Redux/favouratesection/Action'
import { Tooltip } from '@chakra-ui/react'

import { animateScroll as scroll } from 'react-scroll';

const redStyle = {
  color: 'red',
};

export default function Yournotes() {
  const location=useLocation()
 const [searchParams,setSearchParmas]=useSearchParams()
 const [forany,setForany]=useState(false)
 const [deleting,setDeleting]=useState(false)
// console.log(deleting)
const [page,setPage]=useState(searchParams.get("page")||1)

// console.log(page)
const [notes,setNotes]=useState([])
const data=useSelector((sate)=>sate.usernotesreducer)
const dispatch=useDispatch()
const {isLoading,isError,usernotes,totalpages}=data

// console.log(usernotes)
// console.log(totalpages)

const handlepag=(e,change)=>{
  // console.log("hi",change)
  let obj={
    "page":Number(change)
  }
  setSearchParmas(obj)

}

let toast=useToast()
const handledelete=(id)=>{

  dispatch(deletetask(id)).then((res)=>{
    toast({description:"Task Deleted Successfully",position:"top","status":"success","duration":3000})
  setDeleting(!deleting)
  }).catch((err)=>{
    toast({description:"Something wrong to delete task",position:"top","status":"error","duration":3000})
  })
}


useEffect(()=>{
  let obj={
    "params":{
      "sort":searchParams.get('order')&&"date",
      "order":searchParams.get("order")&&searchParams.get("order"),
      "task":searchParams.get("task")&&searchParams.get("task"),
      "page":searchParams.get("page")&&searchParams.get("page"),
      "limit":40
   }}
setPage(searchParams.get("page"))

 
dispatch(getusertask(obj))

},[location.search,deleting,forany])
const buttonStyle = {
  backgroundColor: '#ff5722', // Replace with your desired color code
  color: '#fff', // Text color
};


// handling favourate

const handlefavourate=(id,favstatus)=>{
  // console.log(id,favstatus)
  const obj={"favourate":favstatus}
  dispatch(favourate(id,obj)).then((res)=>{
    toast({description:res.data.msg,status:"success",position:"top","duration":2000})
    setForany(!forany)
    dispatch(favsuccess())
  }).catch((err)=>{
    toast({description:err.response.data.msg,status:"error",position:"top","duration":2000})
    dispatch(favfailure())
  })
}

// scroll to down 


const [isHovered, setIsHovered] = useState(false);
if(isLoading){
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
else if(isError){
  return (
    <Center height="100vh">Something going wrong..</Center>
  )
}
  return (
    // <ThemeProvider theme={theme}>
    <Box bg="blue.50" >
    
    

 
        
      {typeof usernotes!=="undefined"&&usernotes.length>=1?usernotes.map((el)=>{

     return (
         <div className="card" style={{marginTop:"10px"}} key={el._id}>
         <h5 className="card-header">Created on:-{el.date}</h5>
         <div className="card-body">
           <div>
        <Box display={"flex"} justifyContent={"space-between"}>
       <Box> <h5 className="card-title">{el.task}</h5></Box>
        <Box  onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}  display={"flex"} justifyContent={"center"} alignItems={"center"}>
          
          <Tooltip label={el.favourate?"Remove from favourates":"Add to favourates"} >
          {el.favourate?<Favorite  onClick={()=>handlefavourate(el._id,el.favourate)} style={redStyle}/>:
         <FavoriteBorderOutlined onClick={()=>handlefavourate(el._id,el.favourate)}/>}
</Tooltip>
         
         </Box>
          </Box>   
           <p className="card-text">{el.description}</p></div>
           <div style={{display:"flex",justifyContent:"space-between",marginTop:"20px"}}>
             <div>
           <Link to={`/edit/${el._id}`}  className="btn btn-primary"><Edit/></Link></div>

        
           <div><button type="button" className="btn btn-danger" style={{marginLeft:"5px"}} onClick={()=>handledelete(el._id)}><Delete /></button></div>



           </div> 
         </div>
       </div>
     
   ) } ):
      <Box
      
   
       backgroundImage={("https://images.pexels.com/photos/942872/pexels-photo-942872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")}
       backgroundRepeat={"no-repeat"}
       
        w="100%"
        backgroundSize={"cover"} backgroundPosition={"cender"} height="600px"
        >
          <Text fontWeight={"bold"} mt="100px" position={"absolute"} marginLeft={"35%"} fontSize={"50px"} color="red.300">!!NO notes found.</Text>
          <Link to="/CREATE" ><Button position={"absolute"} marginLeft={["3np5%","45%","35%","45%","45%"]} mt={["20rem","300px","200px","200px","200px"]} bg="green.300"> Create Notes?</Button></Link>
        </Box>
    
    }

      <Box display={"flex"} justifyContent={"center"} alignContent={"center"}>

{typeof usernotes!=="undefined"&&usernotes.length>=1&& 

<Pagin handlepag={handlepag} totalpages={totalpages} page={page}/>}</Box>

    </Box> 

  )
}
