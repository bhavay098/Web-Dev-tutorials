import React, { useEffect, useState } from 'react'
import appwriteService from '../appwrite/config'   // Importing the Appwrite service to fetch posts from the backend
import { Container, PostCard } from '../components'   // Importing UI components

function Home() {
    const [posts, setPosts] = useState([])   // State to store fetched posts. Initially it's an empty array

    useEffect(() => {   // Runs once when the component first mounts
        appwriteService.getPosts()   // Fetch posts from Appwrite
            .then((posts) => {   // If posts were successfully retrieved update state with the documents array
                if (posts) {
                    setPosts(posts.documents)   // Appwrite returns data in a format like { documents: [...] }
                }
            })
            .catch((error) => console.error('Failed to fetch posts', error))   // If there's an error fetching posts, log it to the console
    }, [])   // Empty dependency array = run only on first render

    // If there are no posts, show a "Login to read posts" message. This could mean either no posts exist or user is not authenticated
    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold">
                                No Posts Yet...
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    // If posts are available, display them using the PostCard component
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {/* Loop through each post and create a PostCard component */}
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>   {/* key={post.$id} is required by React for list items. $id is Appwrite's unique identifier format */}
                            <PostCard {...post} />   {/* Spread post data as props to PostCard */}
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home