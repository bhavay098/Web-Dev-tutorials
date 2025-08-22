import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'   // JavaScript library used to make HTTP requests

function App() {
  // const [products, error, loading] = customReactQuery('/api/products')   // Custom hook usage was planned but commented out

  // --- State variables ---
  const [products, setProducts] = useState([])    // Stores fetched products
  const [error, setError] = useState(false)       // Tracks if there’s an error
  const [loading, setLoading] = useState(false)   // Tracks loading state
  const [search, setSearch] = useState('')        // Tracks search input value

  // Effect hook that runs whenever 'search' state changes
  useEffect(() => {
    const controller = new AbortController()   // Create AbortController to cancel API request if component unmounts (prevents race conditions)

      // IIFE (Immediately Invoked Function Expression) for async operations because useEffect callback cannot be async directly
      ; (async () => {
        try {
          setLoading(true)   // Start loading
          setError(false)   // Reset error state

          const response = await axios.get('/api/products?search=' + search, { signal: controller.signal })   // Make GET request to API with search parameter and abort signal
          console.log(response.data)   // Debugging: log fetched data
          setProducts(response.data)   // Update products state with API data
          setLoading(false)   // Stop loading after success

        } catch (error) {
          // If request was manually aborted -> don’t set error state
          if (axios.isCancel(error)) {
            console.log('Request canceled', error.message);
            return   // Exit early, don't set error state for cancelled requests
          }
          // Otherwise -> handle actual errors (network issues, server errors, etc.)
          setError(true)
          setLoading(false)   // Stop loading
        }
      })()

    // Cleanup function: runs before next effect or when component unmounts
    // Cancels the ongoing API request to avoid memory leaks
    return () => {
      controller.abort()
    }
  }, [search])   // Dependency array: effect re-runs when `search` changes

  // --- Alternative way to show loading/error UI (commented out) ---
  // if (error) {
  //   return <h1>Something went wrong</h1>
  // }

  // if (loading) {
  //   return <h1>Loading...</h1>
  // }

  return (
    <>
      <h1>Chai aur API in react</h1>

      {/* Controlled input -> tied to `search` state */}
      <input
        type="text"
        placeholder='Search'
        value={search}   // Controlled by state
        onChange={(e) => setSearch(e.target.value)}   // Update state on typing
      />

      {/* Conditional rendering based on state - show loading message when fetching data */}
      {loading && <h1>Loading...</h1>}

      {/* Conditional rendering - show error message when request fails */}
      {error && <h1>Something went wrong</h1>}

      {/* Show number of products returned by API */}
      <h2>Number of products are: {products.length}</h2>
    </>
  )
}

export default App

// TODO: Custom hook for data fetching (incomplete implementation). This would encapsulate the fetching logic and return products, error, and loading states
// Currently just returns undefined values - needs proper implementation
const customReactQuery = (urlPath) => {
  // This should implement the same logic as in useEffect above but in a reusable custom hook format
  return [products, error, loading]   // Note: These variables are not defined in this scope
}