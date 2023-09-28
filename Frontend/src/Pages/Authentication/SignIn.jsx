import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import { Box, useToast,Center } from '@chakra-ui/react';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { LinkBox } from '@chakra-ui/react';
import image1 from "../Images/1.jpg"
import { useDispatch, useSelector } from 'react-redux';
import { usersignin, usersigninfailure, usersignsuccess } from '../../Redux/UserSide/Authentication/UserLogin/Action';
import { usersinginsucc } from '../../Redux/UserSide/Authentication/UserLogin/ActionTypes';
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

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();
const initialdata={
  "email":"",
  "password":""
}
export default function SignInSide() {
  const [signindata,setSignindata]=React.useState(initialdata)
const handlechange=(e)=>{
  const {name,value}=e.target
  setSignindata((pre)=>({...pre,[name]:value}))
}
const dispatch=useDispatch()
const data=useSelector((state)=>state.usersigninreducer)
const toast=useToast()
const navigate=useNavigate()
const location=useLocation()
const {isLoading,isError}=data


// handling background images
const [imageLoaded, setImageLoaded] = React.useState(false);

React.useEffect(() => {
  const img = new Image();
  img.src = "https://source.unsplash.com/random?wallpapers";
  img.onload = () => {
    setImageLoaded(true);
  };
}, []);


// Usage example: Set a cookie with a value that expires in 30 minutes

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



  const handleSubmit = (event) => {
    event.preventDefault();

 const {email,passwoord}=signindata
dispatch(usersignin(signindata)).then((res)=>{
  dispatch(usersignsuccess(res.data))

  sessionStorage.setItem("usertoken",res.data.token)

  toast({description:"Login Successfully",position:'top',"status":"success",duration:1000})
  navigate(location.state,{replace:true})

}).catch((err)=>{
dispatch(usersigninfailure())
  toast({description:err.response.data.msg,status:"error",position:"top","duration":1000})
})
  };
  // if (!imageLoaded) {
  //   return <Center height="100vh" ><h1>Loading ...</h1></Center>;
  // }
  return (
    <>
   <Box>
        <Box 
      
        
        backgroundImage= {("https://images.pexels.com/photos/1766604/pexels-photo-1766604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")}
            backgroundRepeat= 'no-repeat'
        width={"100%"}
        height="600px"
            backgroundSize= 'cover'
            backgroundPosition= 'center'
            >
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
<Box color="white" w={["80%","40%","40%","40%","40%"]}  position={"absolute"}  top="20%" paddingTop={"100px"} component="form" noValidate  sx={{ mt: 1 }}>
<form  onSubmit={handleSubmit}>
  <TextField
 sx={{
    '& .MuiInputBase-input': {
      color: 'white', // Set the desired text color here
    }
 
  }}


  inputProps={{
    style:{
      fontWeight:"bold"
    }
  }
  
  }
 
    margin="normal"
    required
    fullWidth
    id="email"
    label="Email Address"
    name="email"
    autoComplete="email"
  focused

  onChange={handlechange}
  />
  <TextField
    focused
    margin="normal"
    sx={{
      '& .MuiInputBase-input': {
        color: 'white', // Set the desired text color here
      }
   
    }}
  
  
    inputProps={{
      style:{
        fontWeight:"bold"
      }
    }
    
    }
    
      onChange={handlechange}
    required
    fullWidth
    color="success"
    name="password"
    label="Password"
    type="password"
    id="password"
    autoComplete="current-password"
  />
 {isLoading?
  <Button

  fullWidth
  variant="contained"
  sx={{ mt: 3, mb: 2 }}
>


<div className="spinner-grow text-primary" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-secondary" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-success" role="status">
  <span className="visually-hidden">Loading...</span>
</div></Button>:

  <Button
    type="submit"
    fullWidth
    variant="contained"
    sx={{ mt: 3, mb: 2 }}
  >
    Sign In
  </Button>}
</form>
  <Grid container>
  
    <Grid item>
      <Link to="/signup" variant="body2">
        {"Don't have an account? Sign Up"}
      </Link>
    </Grid>
  </Grid>
  <Copyright sx={{ mt: 5 }} />
</Box>
</Box> 
</ThemeProvider>  
                </Box>
<Footer/>
       </>
  );
}
