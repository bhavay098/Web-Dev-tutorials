import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'   // React Router hooks for navigation and linking
import { login as authLogin } from '../store/authSlice'   // Rename the `login` function from authSlice to avoid name conflicts
import { Button, Input, Logo } from './index'   // Import reusable UI components
import { useDispatch } from 'react-redux'   // Redux hook to dispatch actions (to update global state)
import authService from '../appwrite/authService'   // Custom service to interact with Appwrite authentication
import { useForm, } from 'react-hook-form'   // Hook from React Hook Form to manage form inputs and validation

function Login() {
    const navigate = useNavigate();   // Hook to navigate to other routes
    const dispatch = useDispatch();   // Hook to dispatch Redux actions
    const { register, handleSubmit } = useForm();   // Destructure methods from useForm hook
    const [error, setError] = useState('');   // Local state to show errors on UI

    // Async function that runs when the form is submitted
    const login = async (data) => {
        setError('');   // Clear any existing errors

        try {
            const session = await authService.login(data)   // Call the Appwrite login service with user data

            if (session) {   // If login was successful and session is returned
                const userData = await authService.getCurrentUser()   // Fetch the current user's data
                if (userData) dispatch(authLogin(userData))   // Dispatch the user data to Redux store
                navigate('/')   // Navigate to homepage after successful login
            }

        } catch (error) {
            setError(error.message);   // If any error occurs, set it in local state to show on screen
        }
    }

    return (
        <div className='flex items-center justify-center w-full'>
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>

                {/* Logo section */}
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>

                {/* Redirect link to Sign Up page */}
                <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}   {/* Show error message if login fails */}

                <form className='mt-8' onSubmit={handleSubmit(login)}>   {/* handleSubmit is an event, built-in method by react form */}
                    <div className='space-y-5'>
                        
                        {/* Email input field */}
                        <Input
                            label='Email: '
                            placeholder='Enter your email'
                            type='email'
                            {...register('email', {   // register connects each input to React Hook Form's internal state
                                required: true,   // Field is required
                                validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address",   // Custom regex pattern to validate email format
                                }
                            })}
                        />

                        {/* Password input field */}
                        <Input
                            label='Password: '
                            type='password'
                            placeholder='Enter your password'
                            {...register('password', {
                                required: true
                            })}
                        />

                        {/* Submit button */}
                        <Button type='submit' className='w-full'>
                            Sign in
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login