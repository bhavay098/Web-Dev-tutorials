// Step - 1: Create the Redux store

import { configureStore } from "@reduxjs/toolkit";   // a Redux Toolkit function that sets up the Redux store (like a global state container).
import todoReducer from "../features/todo/todoSlice";   // Importing the reducer function from todo slice. This reducer contains logic for handling todo-related state updates


// Creating and exporting the Redux store. This store will hold the global state of the application
export const store = configureStore({   // configureStore() always expects an object as its argument — we must pass an object.
    reducer: todoReducer   // Register the todoReducer to handle the app's todo state
})