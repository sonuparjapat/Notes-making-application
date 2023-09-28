import React from 'react'
import FavourateCarousel from './FavouratesCarousel'
import { Box,Text } from '@chakra-ui/react'
export default function FavouratePage() {
  return (
    <>
    <FavourateCarousel/>
    <Box display="flex"  mt="20px" justifyContent="center" alignItems={"center"} ><Text color={"red"}  textAlign="center" fontSize={["15px","20px","30px","30px","30px"]} fontWeight={600} fontStyle={"bold"}  display={"inline"}>FIND</Text><Text paddingLeft={"5px"} display={"inline"} color={"black"}  textAlign="center" fontSize={["15px","20px","30px","30px","30px"]} fontWeight={600} fontStyle={"bold"}>YOUR FAVOURATES HERE</Text>
    </Box>
    <Box>

        
    </Box>
    </>
  )
}
