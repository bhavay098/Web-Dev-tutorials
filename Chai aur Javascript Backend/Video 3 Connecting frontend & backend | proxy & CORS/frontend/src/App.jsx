import { useEffect, useState } from 'react'
import axios from 'axios'   // Import axios for making HTTP requests
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])   // State to store jokes fetched from backend

  // useEffect runs after the component is mounted (first render)
  useEffect(() => {
    axios.get('/api/jokes')   // Make a GET request to our backend (via proxy `/api/jokes`)
      .then((response) => setJokes(response.data))   // If successful, update state with the data (response.data contains the array of jokes)
      .catch((error) => console.log(error))   // If there's an error, log it in the console
  }, [])   // Adding [] ensures this runs only once when the component mounts

  return (
    <>
      <h1>Chai and full stack</h1>
      <p>JOKES: {jokes.length}</p>   {/* Show the number of jokes fetched */}

      {/* Map through jokes array and render each joke */}
      {jokes.map((joke) => (
        <div key={joke.id}>   {/* key is important for React list rendering */}
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  )
}

export default App