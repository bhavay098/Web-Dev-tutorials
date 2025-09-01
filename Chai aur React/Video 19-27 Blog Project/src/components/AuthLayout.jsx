import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

// Protected Route Component - Wraps around components that require or block authenticated users. If `authentication` is true → the route requires login. If `authentication` is false → the route is for guests (like /login)
export default function Protected({children, authentication} = true) {
    const navigate = useNavigate();
    const [loader, setLoader] = useState(true);   // Local state to control loading screen
    const authStatus = useSelector(state => state.auth.status);   // Get the current auth status from Redux - true or false

    // This effect runs when auth status or route requirement changes
    useEffect(() => {
        // TODO: make it more easy

        /*
        if (authStatus === true) {
            navigate('/')
        } else if (authStatus === false) {
            navigate('/login')
        }
        */

        if (authentication && authStatus !== authentication) {   // If the route requires authentication (authentication === true) but the user is not logged in (authStatus !== true), redirect them to /login
            navigate('/login')
        } else if (!authentication && authStatus !== authentication) {   // If the route does NOT require authentication (authentication === false) but the user IS logged in (authStatus !== false), redirect them to / (home)
            navigate('/')
        }
        setLoader(false);   // Hide loader and show the actual content
    }, [authStatus, navigate, authentication])

    return loader ? <h1>Loading...</h1> : <>{children}</>   // While checking auth and redirecting, show a loading message
}