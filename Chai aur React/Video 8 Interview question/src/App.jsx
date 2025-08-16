import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)   // useState hook to manage "counter" state. Initial value = 15

  //let counter = 15 -> Example of a normal variable (not reactive, so not used here)

  // Function to increase counter
  const addValue = () => {
    // Using functional updates: each call gets the latest state. React batches state updates, so writing setCounter(counter + 1) multiple times in a single function would only increase by 1. But using (prevCounter => prevCounter + 1) ensures each increment applies correctly.

    //counter = counter + 1
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)

  }

  // Function to decrease counter
  const removeValue = () => {
    // Here we are directly using "counter" instead of functional update. This works, but if you called it multiple times in a single function, it wouldn’t decrease properly because React batches updates.
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App