import React, { useEffect, useState } from 'react'
import { Container, PostForm } from '../components'
import appwriteService from '../appwrite/config'
import { useNavigate, useParams } from 'react-router-dom'

function EditPost() {
    const [post, setPost] = useState(null)   // Local state to store the fetched post data. Initially set to null so we know we haven't fetched anything yet
    const { slug } = useParams()   // Extract the slug (URL parameter) from the route
    const navigate = useNavigate()   // Hook to programmatically navigate the user

    useEffect(() => {
        if (slug) {   // If we have a slug, fetch the post details from Appwrite
            appwriteService.getPost(slug)
                .then((post) => {
                    if (post) {   // If post is found, store it in state
                        setPost(post)
                    }
                })
                .catch((error) => console.error("Failed to update post:", error))

        } else {
            navigate('/')   // If no slug is found in the URL, redirect to home
        }
    }, [slug, navigate])   // Runs when slug or navigate changes

    // Conditional rendering: If "post" exists, show the edit form inside the Container. If "post" is still null (loading or not found), render nothing
    return post ? (
        <div className='py-8'>
            <Container>
                <PostForm post={post} />   {/* Passing the fetched post as a prop to PostForm so it can prefill the form */}
            </Container>
        </div>
    ) : null
}

export default EditPost