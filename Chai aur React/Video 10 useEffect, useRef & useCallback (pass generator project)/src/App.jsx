import { useState, useCallback, useEffect, useRef } from 'react'  // hooks

function App() {
  const [length, setLength] = useState(8)  // using hook for length of characters
  const [numberAllowed, setNumberAllowed] = useState(false)  // using hook for the number check box to update check & uncheck
  const [charAllowed, setCharAllowed] = useState(false)  // using hook for the character check box to update check & uncheck
  const [password, setPassword] = useState('')  // using hook for password to update passwords generated randomly

  // useRef hook
  const passwordRef = useRef(null)  // Create a ref with an initial value of null as The actual element (e.g., <input ref={passwordRef} />) hasn’t been rendered yet.

  const passwordGenerator = useCallback(() => {  // useCallback(fn, dependencies) - useCallback hook
    let pass = ""  // the actual password
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"  // this is the data from which password will be created

    if (numberAllowed) str += "0123456789"  // if number box is checked then append numbers inside str
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"  // if character box is checked then append special chars inside str

    for (let i = 0; i < length; i++) {  // loop "length" no of times to build password
      let char = Math.floor(Math.random() * str.length)  // index value of the character from the str array
      pass += str.charAt(char)  // appending the characters in password
    }

    setPassword(pass)  // updating the password in the UI

  }, [length, numberAllowed, charAllowed, setPassword])  // including setPassword here to optimise the code so that it would be saved in cache

  // copying the password
  const copyPassToClipboard = useCallback(() => {
    passwordRef.current?.select()  // highlights the password in the UI (using ? so it would do nothing if password is null)
    passwordRef.current?.setSelectionRange(0, 3)  // selecting a specific range
    window.navigator.clipboard.writeText(password)  // copying the password to clipboard
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])  // useEffect is used to run the useCallback func

  return (
    <>
      <div className='max-w-md mx-auto my-9 rounded-lg p-3 text-yellow-300 bg-gray-700 text-xl'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex mb-3.5'>
          <input
            type="text"
            value={password}  // value will be the generated password
            placeholder='password'
            readOnly
            className='w-full py-1 px-3 rounded-lg bg-white text-gray-600'
            ref={passwordRef}  // passing reference to the input of useRef hook
          />
          <button
            onClick={copyPassToClipboard}
            className='bg-blue-700 text-white px-3 py-1 rounded-lg ml-1.5 cursor-pointer'
          >Copy</button>
        </div>

        <div className='flex text-sm  gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}  // value will be according to the pass length
              className='cursor-pointer block'
              onChange={(e) => { setLength(e.target.value) }}  // triggers every time the user drags the slider and the length value gets updated
            />
            <label>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => { setNumberAllowed((prev) => !prev) }}
            />
            <label>Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => { setCharAllowed((prev) => !prev) }}
            />   {/* controlling the checkbox acc to charAllowed state (true or false) | passing func in onchange & using callback in setChar to change prev state of char */}
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App