import React, { useState } from 'react'
import { useTodo } from '../contexts';   // Import custom hook to access context methods

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false)   // Local state variable to toggle edit mode (true = editable)
  const [todoMsg, setTodoMsg] = useState(todo.todo)   // Local state variable to store the current text value of the todo (used for editing)
  const { updateTodo, deleteTodo, toggleComplete } = useTodo()   // Destructure context methods from custom hook

  // Function to save edited todo and exit edit mode
  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg })   // Update the todo using context method
    setIsTodoEditable(false)   // Exit edit mode
  }

  // Toggle the completed status using context
  const toggleCompleted = () => {
    toggleComplete(todo.id)
  }

  return (
    // Todo item container
    <div className={`flex items-center border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black
        ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}`}   // Background color changes based on completion status
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"} 
          ${todo.completed ? "line-through" : ""}`}   // Strike-through if completed
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}   // Update local input state
        readOnly={!isTodoEditable}   // Allow editing only if edit mode is enabled
      />

      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50 cursor-pointer"
        onClick={() => {
          if (todo.completed) return;   // Disable edit if completed

          if (isTodoEditable) {   // If in edit mode, save the todo; else enable editing
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}   // Button disabled if todo is completed
      >
        {isTodoEditable ? "📁" : "✏️"}   {/* Show 📁 for Save, ✏️ for Edit */}
      </button>

      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 cursor-pointer"
        onClick={() => deleteTodo(todo.id)}   // Delete this todo using context
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;