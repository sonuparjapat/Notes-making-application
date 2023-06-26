import * as React from 'react';
import { Box, Input, Textarea, useToast } from '@chakra-ui/react'

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Paper from '@mui/material/Paper';

import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { LinkBox } from '@chakra-ui/react';
import image1 from "../Images/1.jpg"
import { CreateRounded } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { useraddtask, useraddtaskfailure, useraddtasksuccess } from '../../Redux/UserAddtask/Action';
import { usersingletask, usersingtaksfailure, usersingtasksuccess } from '../../Redux/UserSingletask/Action';
import { useredittask, useredittaskfailure, useredittasksuccess } from '../../Redux/EditUsertask/Action';
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

const edittask={
    "fontFamily":"Georgia",
    "boxshadow":"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    "borderradius":""
}
const initialdata={
  task:"",
  "description":"",
  date:""
}


export default function Edit() {
    const [usersingletaskdata,setUsersingletaskdata]=React.useState(initialdata)
    const {id}=useParams()
    const dispatch=useDispatch()
    const ourdata=useSelector((state)=>state.usersingletaskreducer)
    const {isLoading,isError,data}=ourdata
// console.log(data)
    React.useEffect(()=>{
dispatch(usersingletask(id))
setUsersingletaskdata(data[0])
    },[])





const navigate=useNavigate()
const toast=useToast()
    const handleSubmit=(e)=>{
e.preventDefault()

dispatch(useredittask(id,usersingletaskdata)).then((res)=>{
  dispatch(useredittasksuccess())
toast({description:"Task Edited Successfully","position":'top',"status":"success",duration:3000})
setTimeout(()=>{
  navigate("/NOTES")},3000)
}).catch((err)=>{
  dispatch(useredittaskfailure())
  toast({description:"!!some problem to Edit task","position":'top',"status":"error",duration:3000})
})

    }
    const handlechange=(e)=>{
const {name,value}=e.target
setUsersingletaskdata((pre)=>({...pre,[name]:value}))
    }

    if(isLoading){
        return (
          <Box width="20%" margin="auto">
          <div class="spinner-grow text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div class="spinner-grow text-secondary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div class="spinner-grow text-success" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div class="spinner-grow text-danger" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div class="spinner-grow text-warning" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div class="spinner-grow text-info" role="status">
        <span class="visually-hidden">Loading...</span>
      </div></Box>
        )
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
  <CreateRounded />
</Avatar>
</Box>
<Box color="white" width="40%" margin={"auto"}   component="form" noValidate  sx={{ mt: 1 }}>
  <form onSubmit={handleSubmit}>
<TextField
defaultValue={usersingletaskdata!=="undefined"&&usersingletaskdata.task&&usersingletaskdata.task}
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
    name="task"
    label="Task Name"
    type="text"
    id="task"
    // autoComplete="current-password"
  />
 <Textarea defaultValue={usersingletaskdata!=="undefined"&&usersingletaskdata.description} label="description" name="description" onChange={handlechange} height={"100px"}  placeholder="description...." textAlign={"center"} w="100%" autoFocus color="black" border="2px solid red"/>
  <TextField
  onChange={handlechange}
    focused
    margin="normal"
    sx={{
        '& .MuiInputBase-input': {
          color: 'black', // Set the desired text color here
        }
       
      }}
     defaultValue={usersingletaskdata!=="undefined"&&usersingletaskdata.date}
    required
    fullWidth
    color="success"
    name="date"
    label="Date"
    type="date"
    id="date"
 
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
                </Box>  



  )
}

