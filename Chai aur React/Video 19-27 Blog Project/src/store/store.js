import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice'   // Importing the auth slice reducer which manages the 'auth' part of the state

// Creating the Redux store
const store = configureStore({
    // The `reducer` field is an object where we define slices of our global state
    // In this case, we're adding an 'auth' slice which will be accessible as `state.auth`
    reducer: {
        auth: authReducer
        // TODO: add more slices here for posts
    }
});

export default store;   // Exporting the store so it can be provided to the React app (via <Provider> in index.js or main.jsx)