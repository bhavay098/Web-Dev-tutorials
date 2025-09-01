// Designing a common button component that can be reused across the project

import React from 'react'

function Button({
    children,   // Anything passed between <Button>...</Button> will be accessible via children (usually text or icons)
    type = 'button',   // Default button type is 'button'; can be overridden to 'submit', 'reset', etc.
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = '',   // Optional custom classes for extra styling
    ...props   // Collects any additional props like onClick, disabled, id, etc.
}) {
    return (
        <button
            type={type}   // Ensures correct button behavior in forms (e.g. 'submit', 'reset')
            className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}   // Combines default and custom styles
            {...props}   // Spreads remaining props like onClick, disabled, etc., onto the button   
        >
            {children}   {/* Children is the text to be shown on the button */}
        </button>
    )
}

export default Button