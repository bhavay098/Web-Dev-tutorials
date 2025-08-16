import { useState } from 'react'
import './App.css'

function App() {
  // We only need ONE state: `value`. React will re-render whenever `value` changes.
  // No need for a second state like `multipliedValue` because:
  // 1. It's just a derived value (cheap to compute).
  // 2. Extra state = extra bookkeeping for React + risk of desync bugs.
  // 3. Performance difference = negligible, might even be slightly worse.

  const [value, setValue] = useState(1)
  // const [multipliedValue, setMultipliedValue] = useState(null)

  // Derived value: computed directly from state each render. If the calculation was heavy, we could use useMemo, but here it's trivial.
  let multipliedValue = value * 5

  const multiplyByFive = () => {
    // setMultipliedValue(value * 5) -> would add unnecessary state tracking
    setValue(value + 1)   // Increment `value` by 1 → triggers re-render → recalculates multipliedValue
  }

  return (
    <>
      <h1>Main value: {value}</h1>
      <button onClick={multiplyByFive}>Click to multiply by 5</button>
      <h2>Multiplied value: {multipliedValue}</h2>
    </>
  )
}

export default App