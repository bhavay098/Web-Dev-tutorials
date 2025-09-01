import React, { useId } from 'react'

// forwardRef is a function that lets you pass a ref from a parent component to a child component, so that the parent can directly interact with a DOM node or child component's ref.
// React uses the function name (i.e. function Input) inside forwardRef to display component names in tools like: React DevTools Stack traces Console logs for errors
const Input = React.forwardRef(function Input({
    label,   // Optional label text for the input
    type = 'text',   // Default input type is 'text' unless specified
    className = '',   // Optional additional classes passed to customize styling
    ...props   // Spread operator to accept any other valid <input> props (e.g., placeholder, value, onChange)
}, ref) {
    const id = useId();   // Generates a unique and stable ID for this component instance
    return (
        <div className='w-full'>
            {/* Conditionally render the <label> if a `label` prop is provided */}
            {label && <label   
                className='inline-block mb-1 pl-1'
                htmlFor={id}>   {/* Associate label with input via unique ID for accessibility */}
                {label}
            </label>
            }

            {/* The actual input field */}
            <input
                type={type}
                id={id}   // Assign the unique ID so it's linked to the label
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
                ref={ref}   // Attach the forwarded ref for parent-level access
                {...props}   // Spread the rest of the props (e.g., placeholder, name, onChange)
            />
        </div>
    )
})

export default Input