

import Chai from "./chai"


function App() {
  const username = 'chai aur code'

  return (
    <>
      <Chai />
      <h1>chai aur react {username}</h1>
      <p>test para</p>
    </>
  )  // {} is used to inject js variables within html elements in jsx (similar to ${})
}  // {username} is called evaluated expression (writing only the final outcome of the js code rather than writing whole js code in it)

export default App
