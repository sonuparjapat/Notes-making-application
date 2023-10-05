import React from 'react'
import { useState,useEffect } from 'react'
import { Box,Button,Input,Select } from '@chakra-ui/react'
import { useSearchParams } from 'react-router-dom'
import Yournotes from './Yournotes'
import { Pagination } from '@mui/material'
import { useDebounce } from './Debounce'
import { useSelector } from 'react-redux'
import Pagin from './Pagination'
import { animateScroll as scroll } from 'react-scroll'
export default function FilteringComponent() {

    const [searchParams,setSearchParams]=useSearchParams()

let sortvalue=searchParams.get("date")
    const [sort,setSort]=useState(sortvalue||"")
    const [page,setPage]=useState(searchParams.get("page")||1)
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
//  console.log(page)
 const debounce=useDebounce(handlesearch,1000)
 const handlepag=(e,value)=>{
  console.log(value)
setPage(value)
 }


//  scroll process


  const scrollToBottom = () => {
    scroll.scrollToBottom({
      duration: 1000, // Adjust the duration as needed
      smooth: 'easeInOutQuint', // You can adjust the scrolling animation
    });
  }
  return (
    <div >
         <Box bg="blue.50" w={["90%","90%","80%","80%","80%"]} margin="auto" display="grid" mt="20px" gridTemplateColumns={["repeat(1,1fr)","repeat(1,1fr)","repeat(3,1fr)","repeat(3,1fr)","repeat(3,1fr)"]} gap="10px"> 
        <Box>
      
<Select value={sort} onChange={(e)=>setSort(e.target.value)}>
  <option value="">SortBydate</option>
<option value="desc">up to down</option>
<option value="asc">down to up</option>
</Select>


        </Box>
        <Box><Input border="1px solid gray" placeholder="search your task" onChange={handlechange}
        /></Box>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}><Button onClick={scrollToBottom} bg="green.200" textAlign={"center"}> GO TO BOTTOM</Button></Box>
        </Box> 
        {/* {typeof usernotes!=="undefined"&&
        <Box mt="20px" w="100%" marginBottom="100px"  display={"flex"} justifyContent={"center"} alignItems={"center"}>


</Box>} */}

<Yournotes/>

    </div>
    
  )
}
