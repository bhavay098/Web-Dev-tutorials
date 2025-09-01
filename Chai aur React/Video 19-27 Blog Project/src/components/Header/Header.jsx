import React from 'react'
import { Container, Logo, LogoutBtn } from '../index'   // Import reusable components
import { Link } from 'react-router-dom'   // For navigating via anchor-style links
import { useSelector } from 'react-redux'   // To read values from the Redux store
import { useNavigate } from 'react-router-dom'   // To navigate programmatically (e.g., onClick)

function Header() {
  const authStatus = useSelector((state) => state.auth.status);   // Get the authentication status from the Redux store
  const navigate = useNavigate();   // Allows programmatic navigation on button clicks

  const navItems = [   // Define navigation items and their visibility based on authStatus
    {
      name: 'Home',
      slug: '/',
      active: true   // Always visible
    },
    {
      name: 'Login',
      slug: '/login',
      active: !authStatus   // Only show if user is NOT logged in
    },
    {
      name: 'Signup',
      slug: '/signup',
      active: !authStatus   // Only show if user is NOT logged in
    },
    {
      name: 'All Posts',
      slug: '/all-posts',
      active: authStatus   // Only show if user IS logged in
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    }
  ]

  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='100px' />
            </Link>
          </div>

          <ul className='flex ml-auto'>
            {/* Loop through navItems array and render buttons only if item.active is true */}
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}   // Navigate to route on button click
                    className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                  >{item.name}</button>
                </li>
              ) : null
            )}
            {/* Show logout button if user is logged in */}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}   {/* It conditionally renders something only if authStatus is true. short-circuit conditional rendering in JSX (React syntax) */}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header