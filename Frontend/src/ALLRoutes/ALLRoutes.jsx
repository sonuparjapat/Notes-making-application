import { Image } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../Pages/Homepage'
import Navbar from '../Components/Navbar'
import SignInSide from '../Pages/Authentication/SignIn'
import SignUp from '../Pages/Authentication/Signup'
import AboutUs from '../Pages/AboutUs/AboutUs'
import Yournotes from '../Pages/YourNotes/Yournotes'
import Create from '../Pages/CreateNotes/Create'

export default function ALLRoutes() {
  return (

<>
<Navbar/>
<Routes>

  <Route path="/" element={<Homepage/>}></Route>
  <Route path="/login" element={<SignInSide/>}></Route>
  <Route path="/signup" element={<SignUp/>}></Route>
  <Route path="/HOME" element={<Homepage/>}></Route>
  <Route path="/ABOUTUS" element={<AboutUs/>}></Route>
  <Route path="/CREATE" element={<Create/>}></Route>
  <Route path="/NOTES" element={<Yournotes/>}></Route>
  <Route path="*" element={<AboutUs/>}></Route>
</Routes>

</>



  )
}
