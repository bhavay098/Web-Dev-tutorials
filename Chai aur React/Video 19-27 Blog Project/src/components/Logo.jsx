import React from 'react'

function Logo({ width = '50px' }) {
    return (
        <div>
            <img width={width} src='/logo.png' alt="logo" />
        </div>
    )
}

export default Logo