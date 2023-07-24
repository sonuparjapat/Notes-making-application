import { Box, Button, Checkbox, Input, Select, Toast, useToast } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Delete, Edit } from '@mui/icons-material'
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


export default function Yournotes() {
  const location=useLocation()
 const [searchParams,setSearchParmas]=useSearchParams()
 const [deleting,setDeleting]=useState(false)
console.log(deleting)
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
      "limit":15
   }}
setPage(searchParams.get("page"))

 
dispatch(getusertask(obj))

},[location.search,deleting])
const buttonStyle = {
  backgroundColor: '#ff5722', // Replace with your desired color code
  color: '#fff', // Text color
};
// const mypagedata=useSelector((state)=>state.usernotesreducer)
// const {usernotes,totalpages}=mypagedata
if(isLoading){
  return (
  
    <Box width="20%" margin="auto">
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
    // <ThemeProvider theme={theme}>
    <Box bg="blue.50" >
    
    

 
        
      {typeof usernotes!=="undefined"&&usernotes.length>=1?usernotes.map((el)=>
         <div className="card" style={{marginTop:"10px"}} key={el._id}>
         <h5 className="card-header">Created on:-{el.date}</h5>
         <div className="card-body">
           <div>
           <h5 className="card-title">{el.task}</h5>
           <p className="card-text">{el.description}</p></div>
           <div style={{display:"flex",justifyContent:"space-between",marginTop:"20px"}}>
             <div>
           <Link to={`/edit/${el._id}`}  className="btn btn-primary"><Edit/></Link></div><div><button type="button" className="btn btn-danger" style={{marginLeft:"5px"}} onClick={()=>handledelete(el._id)}><Delete /></button></div></div>
         </div>
       </div>
       
      ):
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

{/* <Pagination count={totalpages}  // Show 1st page and last page

      defaultPage={page} onChange={handlepag}
      color="primary" 
      /> */}
      <Box display={"flex"} justifyContent={"center"} alignContent={"center"}>
{/* <Pagination count={totalpages}  color="primary" defaultPage={page}  onChange={handlepag}  siblingCount={0} boundaryCount={2} /> */}


{/* <Pagination  count={totalpages}
    // Set this to 1 to show 3 buttons (1 start + 1 end + 1 current)
        showFirstButton={3}
        showLastButton={3}
        defaultPage={page}
         onChange={handlepag}/> */}
{typeof usernotes!=="undefined"&&usernotes.length>=1&& 

<Pagin handlepag={handlepag} totalpages={totalpages} page={page}/>}</Box>

    </Box> 

  )
}
