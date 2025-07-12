// Step 2: Creating a slice for todo feature

import { createSlice, nanoid } from "@reduxjs/toolkit";   // createSlice to define a Redux slice, and nanoid to generate unique IDs for todos

const initialState = {   // starting value of the state in Redux. It can be anything like object or array
    todos: [{ id: 1, text: "Hello world" }]
}

// slice is like a "mini app" which contains name, the initialState, functions to change the state (called reducers) and action creators (functions that trigger the reducers).
export const todoSlice = createSlice({   // creating a slice called 'todos' with the initialState. it always accepts an object
    name: 'todo',   // Name of the slice (used in action types like 'todo/addTodo')
    initialState,   // The default state for this slice
    reducers: {   // Reducers – Functions that change the state

        // Takes a text as payload and adds a new todo object with a unique ID
        addTodo: (state, action) => {   // `state` provides access to initialState's current state. `Action` is a message to trigger a reducer. It is an object with type and payload
            const todo = {
                id: nanoid(),   // create a unique ID
                text: action.payload   // The text of the new todo comes from the action's payload. payload is the data you send along with an action — like a message we're passing to the reducer.
            }
            state.todos.push(todo)   // Push the new todo into the todos array
        },

        // Action: removeTodo. Removes a todo by filtering out the one with the matching ID
        removeTodo: (state, action) => {   // 
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },

        // Action: updateTodo. Updates the text of a todo with a matching ID
        updateTodo: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload.id)   // Find the todo item in the array whose ID matches the one passed in the payload
            if (todo) todo.text = action.payload.text   // If such a todo exists, update its text property with the new value from payload  
        }
    }
})

// Exporting action creators. These are functions we can call in components to dispatch the corresponding reducer
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions

export default todoSlice.reducer   // Export the reducer to include in the Redux store setup