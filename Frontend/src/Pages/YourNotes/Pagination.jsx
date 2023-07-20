
import React, { useEffect, useState } from 'react'
import { Pagination } from '@mui/material'
import { Box } from '@chakra-ui/react'
import { useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Toast } from 'bootstrap'
export default function Pagin() {
    const [searchParams,setSearchParams]=useSearchParams()
    const [pagevalue,setPagevalue]=useState(searchParams.get("page")||1)
    const data=useSelector((state)=>state.usernotesreducer)
    const {usernotes,total}=data
    useEffect(()=>{
setSearchParams(pagevalue)
    },[pagevalue])
    const handlepag=(e,value)=>{
        console.log(value)
        setPagevalue(value)
    }
  return (
    <Box w="100%" mt="100px" paddingBottom="100px" display={"flex"} justifyContent={"center"} alignItems={"center"}>

 <Pagination  count={total&&total}
      boundaryCount={1} // Set this to 1 to show 3 buttons (1 start + 1 end + 1 current)
      showFirstButton
      showLastButton onChange={handlepag}/>
</Box>
  )
}


