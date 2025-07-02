import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

// fetching user
function Profile() {
    const { user } = useContext(UserContext)   // reading context

    if (!user) return <div>Please login!</div>

    return <div>Welcome {user.username}</div>
}

export default Profile