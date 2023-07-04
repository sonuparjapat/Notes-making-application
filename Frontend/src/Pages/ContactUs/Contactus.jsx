import * as React from 'react';
import { Box, Input, Spinner, Textarea, useToast } from '@chakra-ui/react'

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import emailjs from '@emailjs/browser';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { LinkBox } from '@chakra-ui/react';
import image1 from "../Images/1.jpg"
import { CreateRounded, Label, Message, QueryBuilder, QueryStatsOutlined } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import Wrapper from './Wrapper';
import { contactfailure, contactsuccess, usercontact } from '../../Redux/ContactSection/Action';
import Footer from '../Footer/Footer';
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        MY NOTES
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
 const defaultTheme=createTheme()

const createnotes={
    "fontFamily":"Georgia",
    "boxshadow":"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    "borderradius":""
}
const initialdata={
  name:"",
  "email":"",
  "message":""
}
export default function ContactUs() {
  const [messg,setMessg]=React.useState(initialdata)

  const userdata=useSelector((state)=>state.usersigninreducer)
  const {username,useremail}=userdata
  React.useEffect(()=>{
setMessg((pre)=>({...pre,name:username,email:useremail}))

  },[])
  const contactdata=useSelector((state)=>state.contactreducer)
  const {isLoading,isError}=contactdata
  const toast=useToast()
  const dispatch=useDispatch()
  const form = React.useRef()
    const handleSubmit=(e)=>{
e.preventDefault()
dispatch(usercontact(messg)).then((res)=>{
  dispatch(contactsuccess())
toast({description:"Message sent successfully","position":"top","status":"success",duration:3000})
setMessg(initialdata)
}).catch((err)=>{
  dispatch(contactfailure())
  toast({description:"!!Message not sent","position":"top","status":"error",duration:3000})
})
    }
    const handlechange=(e)=>{
const {name,value}=e.target
setMessg((pre)=>({...pre,[name]:value}))
    }
  return (
    <Box bgColor="blue.50"  >
    <Wrapper/>
           <ThemeProvider theme={defaultTheme} >
 <Box

sx={{

  mx: 4,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}}
>
    <Box marginTop={"100px"} >
<Avatar  sx={{ m: 1, bgcolor: 'secondary.main' }}>
  <Message />
</Avatar>
</Box>
<Box color="white" width="40%" margin={"auto"}   component="form" noValidate  sx={{ mt: 1 }}>
  <form ref={form}  onSubmit={handleSubmit}>
<TextField
 value={messg.name}
  onChange={handlechange}
    focused
    margin="normal"
    sx={{
        '& .MuiInputBase-input': {
          color: 'black', // Set the desired text color here
        }
       
      }}
    required
    fullWidth
    color="success"
    name="name"
    label="Name"
    type="text"
    id="name"
    // autoComplete="current-password"
  />
<Textarea value={messg.message}  height={"100px"}  placeholder="what you want to ask ..." textAlign={"center"} w="100%" autoFocus color="black"  onChange={handlechange} name="message" border="2px solid red"/>
  <TextField
 
  onChange={handlechange}
    focused
    margin="normal"
    sx={{
        '& .MuiInputBase-input': {
          color: 'black', // Set the desired text color here
        }
       
      }}
    required
   value={messg.email}
    fullWidth
    color="success"
    name="email"
    label="Email"
    type="email"
    id="email"
 
  />
  
 {isLoading?
  <Button

  fullWidth
  variant="contained"
  sx={{ mt: 3, mb: 2 }}
>
<div className="spinner-border spinner-border-sm" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow spinner-grow-sm" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
</Button>:
  <Button
    type="submit"
    fullWidth
    variant="contained"
    sx={{ mt: 3, mb: 2 }}
  >
  Submit
  </Button>}
  </form>
  <Copyright sx={{ mt: 5 }} />
</Box>
</Box> 
</ThemeProvider>  
<Footer/>
                </Box>  



  )
}

