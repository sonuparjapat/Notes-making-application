import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import mission from "../Images/mission.jpg"
import key from "../Images/keyfeatures.jpg"
import GoogleFontLoader from 'react-google-font-loader';
import welcome from "../Images/welcome.jpg"
import joinus from "../Images/Joinus.jpg"
import Footer from '../Footer/Footer';
const about={
    "fontFamily":"Georgia",
    "boxshadow":"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    "borderradius":""
}
export default function AboutUs() {
  return (
    <Box bg="blue.50" >
       
        <Text color="blackAlpha.600" fontFamily="Georgia" fontSize={"30px"} fontWeight={"bold"} textAlign={"center"}>ABOUT US</Text>
        <Box width="90%" margin="auto">
        <Box>
<Box w={["100%","100%","70%","65%","65%"]}  margin="left" >
<Box borderRadius={"10%"} boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"} display={["block","block","bblock","flex","flex"]} justifyContent={"space-around"} gap="20px" >
<Image borderRadius={"10%"} w={["100%","100%","100%","45%","45%"]}  src={welcome}/>
<Text color="red.400" textAlign={"center"} fontFamily={about.fontFamily} mt="50px"><Text display={"block"}>Welcome to our Notes Making Application!</Text>
At "My Notes", we are dedicated to providing you with a powerful and user-friendly platform to create and manage your notes effectively. Our application is designed to simplify the process of capturing and organizing your thoughts, ideas, and important information, allowing you to stay organized and productive.</Text>
</Box>


</Box>
<Box w={["100%","100%","70%","65%","65%"]} margin="auto" marginTop={"100px"} >
<Box borderRadius={"10%"} boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"} display={["block","block","block","flex","flex"]} justifyContent={"space-around"} gap="20px" >
<Image borderRadius={"10%"} w={["100%","100%","100%","65%","65%"]}  src={mission} alt='mission'/>
<Text color="green.400" textAlign={"center"} fontFamily={about.fontFamily} mt="50px"><Text display={"block"}>Our Mission:</Text>

Our mission is to empower individuals like you to take control of their note-taking process. We believe that well-organized and easily accessible notes are key to unlocking creativity, improving productivity, and fostering personal and professional growth. With our application, we aim to make note-taking effortless and enjoyable, giving you the tools you need to succeed.</Text>
</Box></Box>
<Box w={["100%","100%","70%","65%","65%"]}   margin="left" marginTop={"100px"} >
<Box borderRadius={"10%"} boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"} display={["block","block","block","flex","flex"]}justifyContent={"space-around"} gap="20px" >
<Image borderRadius={"10%"} w={["100%","100%","100%","65%","65%"]}  src={key} alt='mission'/>
<Text color="purple.400" textAlign={"center"} fontFamily={about.fontFamily} mt="50px"><Text display={"block"}>Key Features:</Text>
<ul>
    <li style={{textAlign:"left"}}>
    Easy Note Creation: Our application offers a seamless and intuitive interface for creating and editing notes. With a few clicks, you can start capturing your ideas and insights without any distractions.
    </li>
    <li style={{textAlign:"left"}} >Organize and Categorize: Keep your notes organized by utilizing categories or tags. Whether it's personal, work-related, or educational, you can easily categorize and retrieve your notes whenever you need them.</li>
<li style={{textAlign:"left"}} >Quick Search: Find specific notes instantly with our powerful search functionality. Our application allows you to search through your entire collection of notes, saving you valuable time and effort.</li>
<li style={{textAlign:"left"}} >User-Friendly Interface: We understand the importance of a clean and user-friendly interface. Our application is designed to provide a smooth and enjoyable note-making experience, making it a pleasure to use every day.</li>
<li style={{textAlign:"left"}} >Secure Data Storage: We prioritize the security and privacy of your notes. Our application ensures your data is stored securely, giving you peace of mind that your valuable information is protected.</li>

</ul>









</Text>
</Box></Box>
<Box  w={["100%","100%","70%","65%","65%"]}  margin="auto" marginTop={"100px"} >
<Box borderRadius={"10%"} boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"} display={["block","block","block","flex","flex"]} justifyContent={"space-around"} gap="20px" >
<Image borderRadius={"10%"} w={["100%","100%","100%","65%","65%"]}  src={joinus} alt='mission'/>
<Text color="pink.400" textAlign={"center"} fontFamily={about.fontFamily} mt="50px"><Text display={"block"}>Join Us:</Text>



Thank you for choosing "My Notes" as your trusted notes making application. We are committed to continually improving our services and adding new features to enhance your note-taking experience. Join our growing community of note-takers and start organizing your ideas in a more efficient and systematic way.</Text>
</Box></Box>
</Box>



        </Box>
        <Footer/>
       </Box>
  )
}
