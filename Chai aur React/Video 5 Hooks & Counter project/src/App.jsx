import { useState } from 'react'  // importing hook
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)  // const [stateVariable, setStateFunction] = useState(initialValue);
  // counter is the state — it holds the number to show on the screen.
  // setCounter is the function to update that number.
  // useState(15) is the default value of the counter

  // let counter = 15  // default value of the counter

  const increaseValue = () => {
    if (counter < 20) {
      // counter = counter + 1  // increasing the value of the counter by 1
      setCounter(counter + 1)  // calling the setCounter function which updates the value of the counter
    }
  }

  const decreaseValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={increaseValue}>Increase value {counter}</button>
      <br />
      <button onClick={decreaseValue}>Decrease value {counter}</button>
      <p>footer: {counter}</p>
    </>  // adding onclick listener on button and passing the reference of addValue function
  )
}

export default App
