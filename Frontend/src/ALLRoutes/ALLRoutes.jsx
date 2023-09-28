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
import PrivateRoute from './PrivateRoute'
import ContactUs from '../Pages/ContactUs/Contactus'

import Edit from '../Pages/Edittask/Edit'
import FilteringComponent from '../Pages/YourNotes/FilteringComponent'
import FavourateCarousel from '../Pages/Favourates/FavouratesCarousel'
import PageNotFound from '../Pages/PageNotFount/PageNotFound'
import FavouratePage from '../Pages/Favourates/FavouratePage'


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
  <Route path="/CREATE" element={<PrivateRoute><Create/></PrivateRoute>}></Route>

  <Route path="/NOTES" element={<PrivateRoute><FilteringComponent/></PrivateRoute>}></Route>
  <Route path="/edit/:id" element={<PrivateRoute><Edit/></PrivateRoute>}></Route>
  <Route path="/CONTACTUS" element={<PrivateRoute><ContactUs/></PrivateRoute>}></Route>
  <Route path="/FAVOURATES" element={<PrivateRoute><FavouratePage/></PrivateRoute>}></Route>
 {/* <Route path="/Practice" element={<PrivateRoute><Practice/></PrivateRoute>}></Route> */}
  <Route path="*" element={<PageNotFound/>}></Route>
</Routes>

</>



  )
}
