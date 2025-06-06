import { useState } from 'react'  // importing hook
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [] = useState(15)

  const addValue = () => {
    console.log('clicked', counter)
    counter = counter + 1  // increasing the value of the counter by 1
  }

  let counter = 15  // default value of the counter

  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Increase value {counter}</button>
      <br />
      <button>Decrease value {counter}</button>
      <p>footer: {counter}</p>
    </>  // adding onclick listener on button and passing the reference of addValue function
  )
}

export default App
