import { createContext, useContext } from "react"; 

// creating context
export const todoContext = createContext({   // passing default values
    todos: [   // a list with one sample todo.
        {
            id: 1,
            todo: 'todo msg',
            completed: false
        }
    ],
    addTodo: (todo) => {},   // Empty functions so the app doesn't crash if no provider is present.
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

// custom hook named useTodo(). It simply wraps useContext(todoContext) so we can use const { todos, addTodo } = useTodo() anywhere in our components without directly calling useContext every time.
export const useTodo = () => {
    return useContext(todoContext)
}

export const TodoProvider = todoContext.Provider