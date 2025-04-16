import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
    // A mock up to simulate token exist or not, for user logged in
    const token = localStorage.getItem('token')
    // If token exists the page will be showed,
    // if not navigate to "/" page

    return token ? <Outlet/> : <Navigate to='/' replace/>
 
}

export default ProtectedRoute