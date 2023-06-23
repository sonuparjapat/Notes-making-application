import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
export default function PrivateRoute({children}) {
    const data=useSelector((state)=>state.usersigninreducer)

const {usertoken}=data
  


// Check if the user is logged in


   
      const location=useLocation()

if(!usertoken){
    return <Navigate to="/login" state={location.pathname} replace />
}
return children
}
