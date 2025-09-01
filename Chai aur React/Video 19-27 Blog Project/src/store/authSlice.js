// Importing the `createSlice` function from Redux Toolkit to easily create reducer logic and actions
import { createSlice } from "@reduxjs/toolkit";

// Initial state for the auth slice
const initialState = {
    status: false,   // Tracks if the user is logged in (true = logged in, false = logged out)
    userData: null   // Will hold user data after login
}

// Creating a slice for authentication logic
const authSlice = createSlice({
    name: 'auth',   // Name of this slice (used in actions and Redux dev tools)
    initialState,   // Initial state for this slice
    reducers: {
        // Action: login - When dispatched, sets `status` to true and stores user data in state
        login: (state, action) => {   
            state.status = true;
            state.userData = action.payload.userData   // payload is expected to contain user data
        },
        // Action: logout - When dispatched, sets `status` to false and clears user data
        logout: (state) => {
            state.status = false;
            state.userData = null
        }
    }
})

export const { login, logout } = authSlice.actions   // Exporting the action creators so we can dispatch them from our components

export default authSlice.reducer;   // Exporting the reducer function to be included in the Redux store