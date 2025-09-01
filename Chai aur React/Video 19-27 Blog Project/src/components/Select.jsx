import React, { useId } from 'react'

// Defining a Select component that accepts props like options, label, className, and others.
function Select({
    options = [],
    label,
    className = '',
    ...props
}, ref) {   // `ref` is passed as a second argument so it can be forwarded to the <select> element.
    const id = useId()

    return (
        <div className='w-full'>
            {label && <label htmlFor={id} className=''></label>}   {/* Render the label only if the `label` prop is passed */}

            {/* The select dropdown */}
            <select
                {...props}   // Spread any extra props like `value`, `onChange`, etc.
                id={id}   // Set the unique ID for accessibility
                ref={ref}   // Attach the forwarded ref to the <select> element
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full${className}`}
            >
                {/* Map over the `options` array to render <option> elements */}
                {options?.map((option) => (   // optional chaining - Only call .map() if options is not null or undefined.
                    <option key={option} value={option}>
                        {option}   {/* Display the option text */}
                    </option>
                ))}
            </select>
        </div>
    )
}

// Exporting the component using React.forwardRef so parent components can access the DOM node
export default React.forwardRef(Select)   // another syntax for forwardRef