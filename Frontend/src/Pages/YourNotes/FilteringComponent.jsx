import React from 'react'
import { useState,useEffect } from 'react'
import { Box,Input,Select } from '@chakra-ui/react'
import { useSearchParams } from 'react-router-dom'
import Yournotes from './Yournotes'
import { Pagination } from '@mui/material'
import { useDebounce } from './Debounce'
import { useSelector } from 'react-redux'
import Pagin from './Pagination'
export default function FilteringComponent() {

    const [searchParams,setSearchParams]=useSearchParams()

let sortvalue=searchParams.get("date")
    const [sort,setSort]=useState(sortvalue||"")
    const [page,setPage]=useState(searchParams.get("page")||7)
      const [searchvalue,setSearchvalue]=useState(searchParams.get("search")||"")
const data=useSelector((state)=>state.usernotesreducer)
const {usernotes,totalpages}=data

    useEffect(()=>{
        let obj={
           
        }
        page&&(obj.page=page)
        searchvalue&&(obj.task=searchvalue)
        sort&&(obj.order=sort)
     
        setSearchParams(obj)
    },[sort,searchvalue,page])
 const handlechange=(e)=>{
debounce(e.target.value)
 }
 const handlesearch=(e)=>{
//  debouncecall
setSearchvalue(e)
 }
 
 const debounce=useDebounce(handlesearch,1000)
 const handlepag=(e,value)=>{
setPage(value)
 }
  return (
    <div >
         <Box bg="red.50"  w="60%" margin="auto" display="flex" justifyContent={"space-around"}> 
        <Box>
      
<Select value={sort} onChange={(e)=>setSort(e.target.value)}>
  <option value="">SortBydate</option>
<option value="desc">up to down</option>
<option value="asc">down to up</option>
</Select>


        </Box>
        <Box><Input placeholder="search your task" onChange={handlechange}
        /></Box>
        </Box> 
        {typeof usernotes!=="undefined"&&usernotes.length>5&&
        <Box mt="20px" w="100%" marginBottom="100px"  display={"flex"} justifyContent={"center"} alignItems={"center"}>

<Pagination  count={totalpages}
 // Set this to 1 to show 3 buttons (1 start + 1 end + 1 current)
     showFirstButton
     showLastButton onChange={handlepag}/>
</Box>}
<Yournotes/>



    </div>
  )
}
