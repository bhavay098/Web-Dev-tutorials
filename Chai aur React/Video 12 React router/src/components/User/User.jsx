import React from 'react'
import { useParams } from 'react-router-dom'  // useParams is a React Router hook that allows you to access the URL parameters from the current route.

function User() {
    const { userid } = useParams()
    return (
        <div className='bg-gray-600 text-white text-3xl p-3'>User: {userid}</div>
    )
}

export default User