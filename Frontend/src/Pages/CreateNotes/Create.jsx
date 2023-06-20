import * as React from 'react';
import { Box } from '@chakra-ui/react'

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';

import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { LinkBox } from '@chakra-ui/react';
import image1 from "../Images/1.jpg"
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
export default function Create() {
    const handleSubmit=(e)=>{

    }
    const handlechange=(e)=>{

    }
  return (
    <Box bgColor="blue.50" height="800px" >
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
  <LockOutlinedIcon />
</Avatar>
</Box>
<Box color="white" width="40%" margin={"auto"}   component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
    name="task"
    label="Task Name"
    type="text"
    id="task"
    // autoComplete="current-password"
  />
  <TextField
 sx={{
    '& .MuiInputBase-input': {
      color: 'white', // Set the desired text color here
    }
 
  }}
    margin="normal"
    required
    fullWidth
    id="email"
    label="Email Address"
    name="email"
    autoComplete="email"
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
    autoComplete="current-password"
  />
  
 
  <Button
    type="submit"
    fullWidth
    variant="contained"
    sx={{ mt: 3, mb: 2 }}
  >
  Submit
  </Button>
 
  <Copyright sx={{ mt: 5 }} />
</Box>
</Box> 
</ThemeProvider>  
                </Box>  



  )
}

