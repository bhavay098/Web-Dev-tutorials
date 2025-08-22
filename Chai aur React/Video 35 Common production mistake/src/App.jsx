import { useState } from 'react'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(NaN);   // Initial value is NaN, which is "falsy" in JavaScript

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome to chai code</h1>

      {/* Button toggles the isLoggedIn state between true/false */}
      <button
        onClick={() => setIsLoggedIn(!isLoggedIn)}
      >Toggle login</button>

      {/* Section demonstrating the logical AND (&&) operator */}
      <div>
        <h2>&& operator</h2>
        {/* 
          !!isLoggedIn converts the value to a boolean:
          - First ! converts to boolean and negates it
          - Second ! negates again, giving the boolean equivalent
          - If isLoggedIn is truthy, the paragraph will render
          - Since initial value is NaN, !!NaN becomes false
        */}
        {!!isLoggedIn && <p>Welcome to chai code video</p>}
      </div>

      {/* Section demonstrating the ternary operator */}
      <div>
        <h2>Ternary operator</h2>
        {/* 
          Ternary operator: condition ? valueIfTrue : valueIfFalse
          - If isLoggedIn is truthy, show the welcome paragraph
          - If isLoggedIn is falsy, show the 'Please login' text
          - Since NaN is falsy, this will initially show 'Please login'
        */}
        {isLoggedIn ? <p>Welcome to chai code video</p> : 'Please login'}
      </div>
    </div>
  )
}

export default App
