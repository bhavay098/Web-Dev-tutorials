// Reusable layout wrapper component
// 1. Ensures consistent max width for content across all pages (max-w-7xl)
// 2. Makes it responsive and full width on smaller screens (w-full)
// Benefit: Instead of repeating these Tailwind classes everywhere, we define them once here, making layout changes easier and consistent.

import React from 'react'

function Container({ children }) {
  return <div className='w-full max-w-7xl mx-auto px-4'>{children}</div>;

}

export default Container