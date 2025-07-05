import { useState, useEffect } from 'react'
import { TodoProvider } from './contexts'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  // storing all todos in a state variable which is an empty array by default
  const [todos, setTodos] = useState([])


  // Add a new todo to the beginning of the array. The `todo` parameter is expected to be an object like { todo: "Task", completed: false }
  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])   // Prepend new todo with unique `id`
  }


  // Updating a specific todo by ID. Replaces the old todo with the new one (passed as `todo`) if IDs match
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))   // prev is the last state of the todos array and prevTodo is the individual todo inside that array
  }


  // Delete a todo by filtering it out from the array using its ID
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))   // getting the todos which don't match the id & removing the one which matches the given id   
  }


  // Toggling the completed status of a todo. It keeps all other properties the same using spread operator, and changes `completed`
  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo))
  }


  // Load todos from localStorage on initial page load
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'))   // converting data in json as localstorage stores and provides data in string format

    if (todos && todos.length > 0) {   // condition check whether todos array is present and it's length is greater than 0
      setTodos(todos)   // Set the initial state with saved todos
    }
  }, [])   // Empty dependency array → runs ONLY once on first render


  // Save todos to localStorage whenever `todos` changes
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))   // Convert todos array to string format and save to localStorage
  }, [todos])   // This runs every time `todos` state changes


  // Wrapping the entire app with the context provider. This makes the todos and related functions available to any child component using 'useTodo()'
  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/* Loop through todos array and render a TodoItem for each todo */}
            {todos.map((todo) => (
              <div key={todo.id} className='w-full'>   {/* The key is a special prop that React uses to identify each item in a list uniquely. */}   
                <TodoItem todo={todo} />   {/* Pass the current todo as a prop to the TodoItem component */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App