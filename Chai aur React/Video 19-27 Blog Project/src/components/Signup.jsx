import React, { useState } from 'react'
import authService from '../appwrite/authService'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../store/authSlice'
import { Button, Input, Logo } from './index'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

function Signup() {
    const navigate = useNavigate();   // To redirect user after successful signup
    const dispatch = useDispatch();   // To update the Redux store
    const { register, handleSubmit } = useForm()   // useForm gives us register (to bind inputs) and handleSubmit (to handle form validation + submission)
    const [error, setError] = useState('');   // Local state to hold any error message

    // Function to run when form is submitted
    const signup = async (data) => {
        setError('')   // Clear previous errors
        try {
            const userData = await authService.createAccount(data)   // Creating user account via Appwrite

            if (userData) {   // If account creation was successful
                const userData = await authService.getCurrentUser();   // Getting currently logged-in user's details
                if (userData) dispatch(login(userData));   // Dispatch user data to Redux store
                navigate('/');   // redirect to home
            }

        } catch (error) {
            setError(error.message)   // If any error occurs during signup, show it on screen
        }
    }

    return (
        <div className="flex items-center justify-center">
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                {/* Logo at the top */}
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                {/* Heading */}
                <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
                {/* Link to login if already registered */}
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
                {/* Display error message if exists */}
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

                {/* Signup form starts here */}
                <form onSubmit={handleSubmit(signup)}>   
                    <div className='space-y-5'>
                        {/* Full Name input field */}
                        <Input
                            label='Full Name: '
                            placeholder='Enter your full name'
                            type='text'
                            {...register('name', {
                                required: true
                            })}
                        />

                        {/* Email input with pattern validation */}
                        <Input
                            label='Email: '
                            placeholder='Enter your email'
                            type='email'
                            {...register('email', {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address",
                                }
                            })}
                        />

                        {/* Password input */}
                        <Input
                            label='Password: '
                            placeholder='Enter your password'
                            type='password'
                            {...register('password', {
                                required: true
                            })}
                        />

                        {/* Submit button */}
                        <Button type='submit' className='w-full'>Create Account</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup