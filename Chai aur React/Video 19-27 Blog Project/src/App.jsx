import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import authService from './appwrite/authService'
import { login, logout } from './store/authSlice'
import { Header, Footer } from './components'
import { Outlet } from 'react-router-dom';
import './App.css'

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))

        } else {
          dispatch(logout())
        }
      })
      .catch((error) => {
        console.error('Error fetching current user:', error)
        dispatch(logout())
      })
      .finally(() => setLoading(false))
  }, [])

  // Conditional rendering - Showing or hiding elements in the UI based on a condition.
  return loading ? (<div>Loading...</div>) :
    (
      <div className='min-h-screen flex flex-wrap content-between bg-gray-500'>
        <div className='w-full block'>
          <Header />
          <main>
            <Outlet />  {/* TODO */}
          </main>
          <Footer />
        </div>
      </div>
    )
}

export default App