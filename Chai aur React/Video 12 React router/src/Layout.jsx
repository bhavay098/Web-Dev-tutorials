import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
// <Outlet /> is a placeholder component in React Router used for nested routing. It tells React where to render child routes inside a parent route layout. <Outlet /> = “Put the matching child route’s component right here.” It defines a common layout used by all child pages (e.g. Home, About).

function Layout() {
    return (
        <>
            <Header />
            <Outlet />  {/* this is where React Router injects the current route's content */}
            <Footer />
        </>
    )
}
// This allows us to reuse the same header and footer for multiple pages without repeating them in every file.
export default Layout