import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'   // Redux store provider and store configuration
import store from './store/store.js'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'   // React Router imports
import { AuthLayout } from './components'   // Layout and page components
import { Home, Login, Signup, AllPosts, AddPost, EditPost, Post } from './pages'

const router = createBrowserRouter(   // createBrowserRouter: Creates a browser-based router using the HTML5 History API
  createRoutesFromElements(   // createRoutesFromElements: Allows us to define routes using JSX elements
    <Route path='/' element={<App />}>   {/* Root route */}

      <Route path='/' element={<Home />} />   {/* Home page (default route) */}

      <Route path='login' element={(   // Login page (only accessible when NOT authenticated)
        <AuthLayout authentication={false}>
          <Login />
        </AuthLayout>
      )} />

      <Route path='signup' element={(   // Signup page (only accessible when NOT authenticated)
        <AuthLayout authentication={false}>
          <Signup />
        </AuthLayout>
      )} />

      <Route path='all-posts' element={(   // All Posts page (requires authentication) | loader: Fetches posts BEFORE rendering the page
        <AuthLayout authentication>
          <AllPosts />
        </AuthLayout>
      )} />

      <Route path='add-post' element={(   // Add new post page (requires authentication)
        <AuthLayout authentication>
          <AddPost />
        </AuthLayout>
      )} />

      <Route path='edit-post/:slug' element={(   // Edit post page (requires authentication)
        <AuthLayout authentication>
          <EditPost />
        </AuthLayout>
      )} />

      <Route path='post/:slug' element={<Post />} />   {/* Single Post details page (publicly accessible) */}
    </Route>
  )
)

createRoot(document.getElementById('root')).render(   // Render the React app into the root DOM element
  <StrictMode>   {/* StrictMode: Highlights potential problems in development */}
    <Provider store={store}>   {/* Provider: Makes the Redux store available to the entire app */}
      <RouterProvider router={router} />   {/* RouterProvider: Provides routing capabilities using our defined router */}
    </Provider>
  </StrictMode>,
)
