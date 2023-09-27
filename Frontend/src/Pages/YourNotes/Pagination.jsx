
import React, { useEffect, useState } from 'react'
import { Pagination } from '@mui/material'
import { Box } from '@chakra-ui/react'
import { useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Toast } from 'bootstrap'
export default function Pagin({handlepag,totalpages,page}) {
  const totalPagesCount = parseInt(totalpages, 10);
  const currentPage = parseInt(page, 10);
  // console.log(totalpages,totalPagesCount)
    const [searchParams,setSearchParams]=useSearchParams()
    const [pagevalue,setPagevalue]=useState(searchParams.get("page")||1)
    const data=useSelector((state)=>state.usernotesreducer)
    const {usernotes,total}=data
  
  return (
    <Box w="100%" mt="100px" paddingBottom="100px" display={"flex"} justifyContent={"center"} alignItems={"center"}>

 <Pagination  count={totalPagesCount}
 defaultPage={currentPage}
      boundaryCount={1} // Set this to 1 to show 3 buttons (1 start + 1 end + 1 current)
      showFirstButton
      showLastButton onChange={handlepag}/>
</Box>
  )
}


