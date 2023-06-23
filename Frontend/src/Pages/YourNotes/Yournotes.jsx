import { Box } from '@chakra-ui/react'
import { Delete, Edit } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { getusertask } from '../../Redux/UserNotes/Action'
import { useDispatch, useSelector } from 'react-redux'

export default function Yournotes() {
const [notes,setNotes]=useState([])
const data=useSelector((sate)=>sate.usernotesreducer)
const dispatch=useDispatch()
const {isLoading,isError,usernotes}=data
console.log(usernotes)
useEffect(()=>{
dispatch(getusertask)
},[])
  return (
    <Box bg="blue.50" height={"800px"}>
      {typeof usernotes!=="undefined"&&usernotes.length>=1?usernotes.map((el)=>
         <div className="card" style={{marginTop:"10px"}} key={el._id}>
         <h5 className="card-header">Created on:-{el.date}</h5>
         <div className="card-body" style={{display:"flex",justifyContent:"space-between"}}>
           <div>
           <h5 className="card-title">{el.task}</h5>
           <p className="card-text">{el.description}</p></div>
           <div style={{display:"flex",justifyContent:"space-between"}}>
             <div>
           <a href="#" className="btn btn-primary"><Edit/></a></div><div><button type="button" class="btn btn-danger" style={{marginLeft:"5px"}}><Delete/></button></div></div>
         </div>
       </div>
       
      ):"No data found"
    
    }
   
    </Box>
  )
}
