import { useState } from 'react'
import './App.css'

function App() {
    // This log helps us see when the component re-renders. Math.random() ensures a different number is printed each time.
    console.log('App rendered', Math.random());

    // Using useState with an object instead of a primitive. `value` here is the state object, not just a number.
    const [value, setValue] = useState({ value: 0 })

    // When this button is clicked, we call setValue with { value: 0 } again. Even though the value is "the same" from our perspective, React sees it as a NEW object (different reference in memory), so it will re-render the component anyway.
    const clickMe = () => {
        setValue({ value: 0 })
    }

    return (
        <>
            <h1>Main value: {value.value}</h1>
            <button onClick={clickMe}>Click to multiply by 5</button>
        </>
    )
}

export default App

/*
Key takeaway 💡:
- When state is an object or array, React compares by reference, not by value.
- So setValue({ value: 0 }) creates a new object every time → React thinks state changed → re-renders.
- If you only need a number, use useState(0) instead.
*/