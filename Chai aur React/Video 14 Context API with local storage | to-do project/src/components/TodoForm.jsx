import React, { useState } from 'react'
import { useTodo } from '../contexts/todoContext';   // Importing custom hook to access the todo context

function TodoForm() {
    const [todo, setTodo] = useState("")   // Local state variable to store the input value from the text box
    const { addTodo } = useTodo()   // Getting the `addTodo` function from context using the custom hook

    // Handle form submission
    const add = (e) => {
        e.preventDefault()   // Prevent page reload on form submit

        if (!todo) return   // If input is empty, exit early (do not add blank todos)

        // Add new todo using the context function
        addTodo({
            todo,   // Text from input
            completed: false   // Default completed state is false
        })

        setTodo('')   // Clearing the input field after submission
    }

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}   // Controlled input: value tied to state
                onChange={(e) => setTodo(e.target.value)}   // Update state on input change
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0 cursor-pointer">
                Add
            </button>
        </form>
    );
}

export default TodoForm;