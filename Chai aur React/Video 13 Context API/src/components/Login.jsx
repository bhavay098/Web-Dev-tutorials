import React, { useState, useContext } from 'react'  // useContext is a React hook that lets your components read values from a context without needing to pass props manually.
import UserContext from '../context/UserContext'  // UserContext is the Context Object created using createContext()

// creating user (updating context)
function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { setUser } = useContext(UserContext)  // using useContext(UserContext) to access data from the context. (const value = useContext(MyContext); )

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})   // Called on form submit
    }
    return (
        <div>
            <h2>Login</h2>
            <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder='username' />
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='password' />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login