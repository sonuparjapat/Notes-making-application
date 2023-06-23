import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import { Box, useToast } from '@chakra-ui/react';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { LinkBox } from '@chakra-ui/react';
import image1 from "../Images/1.jpg"
import { useDispatch, useSelector } from 'react-redux';
import { signupfailure, signupsucess, usersignup } from '../../Redux/UserSide/Authentication/Action';
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

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();
const initialdata={
  "name":"",
  "email":"",
  "password":""
}
export default function SignUp() {
  const [signupdata,setSignupdata]=React.useState(initialdata)
  const toast=useToast()
  const location=useLocation()
  const navigate=useNavigate()
    const handlechange=(e)=>{
      const {name,value}=e.target
setSignupdata((pre)=>({...signupdata,[name]:value}))

    }
const dispatch=useDispatch()
const data=useSelector((state)=>state.usersignupreducer)
const {isLoading,isError}=data
  const handleSubmit = (event) => {
    event.preventDefault();
    const {name,email,password}=signupdata
    if(name&&email&&password){

    
  dispatch(usersignup(signupdata)).then((res)=>{

    dispatch(signupsucess())
    toast({description:res.data.msg,"position":"top","status":"success","duration":1000})
    navigate("/login")
  }).catch((err)=>{

    dispatch(signupfailure())
    toast({description:err.response.data.msg,"position":"top","status":"error","duration":1000})
  })}else{
    toast({description:"Please provide all the required details","position":"top","status":"error",duration:1000})
  }

    


  };

  return (
    <>
   <Box>
        <Box 
      
        
        backgroundImage= {("https://source.unsplash.com/random?wallpapers")}
            backgroundRepeat= 'no-repeat'
        width={"100%"}
        height="600px"
            backgroundSize= 'cover'
            backgroundPosition= 'center'>
           </Box>
           <ThemeProvider theme={defaultTheme} >
 <Box
     
sx={{
  my: 8,
  mx: 4,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}}
>
    <Box marginTop={"100px"} position="absolute" top="10%">
<Avatar  sx={{ m: 1, bgcolor: 'secondary.main' }}>
  <LockOutlinedIcon />
</Avatar>
</Box>

<Box color="white" width="40%" margin={"auto"}  position={"absolute"}  top="20%" paddingTop={"100px"} component="form" noValidate  sx={{ mt: 1 }}>
<form onSubmit={handleSubmit}><TextField
  onChange={handlechange}
    focused
    margin="normal"
    sx={{
        '& .MuiInputBase-input': {
          color: 'white', // Set the desired text color here
        }
       
      }}
    required
    fullWidth
    color="success"
    name="name"
    label="Name"
    type="text"
    id="name"
    autoComplete="current-password"
  />
  <TextField
 sx={{
    '& .MuiInputBase-input': {
      color: 'white', // Set the desired text color here
    }
 
  }}
  onChange={handlechange}
    margin="normal"
    required
    fullWidth
    id="email"
    label="Email Address"
    name="email"
    type="email"

  focused
  />
  <TextField
  onChange={handlechange}
    focused
    margin="normal"
    sx={{
        '& .MuiInputBase-input': {
          color: 'white', // Set the desired text color here
        }
       
      }}
    required
    fullWidth
    color="success"
    name="password"
    label="Password"
    type="password"
    id="password"
 
  />
  
 {isLoading?  <Button
    type="submit"
    fullWidth
    variant="contained"
    sx={{ mt: 3, mb: 2 }}
  >
<div className="spinner-border text-dark" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
  </Button>:
  <Button
    type="submit"
    fullWidth
    variant="contained"
    sx={{ mt: 3, mb: 2 }}
  >
    Sign Up
  </Button>}</form>
  <Grid container>
  
    <Grid item>
      <Link to="/login" variant="body2">
        {"Already have an account? Sign In"}
      </Link>
    </Grid>
  </Grid>
  <Copyright sx={{ mt: 5 }} />
</Box>
</Box> 
</ThemeProvider>  
                </Box>

       </>
  );
}
