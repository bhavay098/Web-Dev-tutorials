import React from 'react'
import { Container, PostForm } from '../components'   // Importing reusable components

function AddPost() {
    return (
        // Outer div for vertical padding around the content
        <div className='py-8'>
            {/* Container centers content and applies max width + horizontal padding */}
            <Container>
                <PostForm />   {/* Wrapping PostForm in Container keeps layout consistent with rest of the app */}
            </Container>
        </div>
    )
}

export default AddPost