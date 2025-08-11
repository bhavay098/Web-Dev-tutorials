import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'  // Importing React Router’s Data Router API
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import './index.css'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

// const router = createBrowserRouter([  // Defining routes using createBrowserRouter()
//   {
//     path: '/',   // Matches all / routes
//     element: <Layout />,   // Wraps everything with Header + Footer
//     children: [
//       {
//         path: '',   // Matches '/'
//         element: <Home />   // / → uses Layout, and then loads <Home /> into <Outlet />
//       },
//       {
//         path: 'about',   // Matches `/about`
//         element: <About />   // /about → also uses Layout, and loads <About /> into <Outlet />
//       },
//       {
//         path: 'contact',
//         element: <Contact />
//       }
//     ]
//   }   // Layout is shared, but the middle content depends on the path.
// ])

/*
User visits /about
↓
Router matches /about under /
↓
Layout component is rendered
→ Header
→ Outlet ← renders <About />
→ Footer
*/

// another way of creating routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />  {/* :userid is a URL parameter — also called a route param. This part of the URL is dynamic, and we can extract it using useParams hook */}
      <Route
        loader={githubInfoLoader}  // a loader is a special function that runs before a route is rendered. It lets you fetch data or perform any async logic before showing the page. It is accessed by useLoaderData() hook in the component
        path='github'
        element={<Github />}
      />
    </Route>
  )   
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)