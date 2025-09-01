import React from 'react'
import appwriteService from '../appwrite/config'   // Importing appwriteService to access the method that returns image preview URLs
import { Link } from 'react-router-dom'

// PostCard component receives post data as props: $id, title, and featuredImage
function PostCard({ $id, title, featuredImage }) {   // $id is appwrite's syntax
    return (
        // Wrap the entire card in a Link so that clicking it navigates to the individual post page
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray-100 rounded-xl p-4 '>
                {/* Image container. Show image container only if image has been uploaded */}
                {featuredImage && (   
                    <div className='w-full justify-center mb-4'>
                        <img
                            src={appwriteService.getFilePreview(featuredImage)}   // Gets a preview URL for the image from Appwrite
                            alt={title}
                            className='rounded-xl'
                        />
                    </div>
                )}

                {/* Display the post title */}
                <h2 className='text-xl font-bold'>{title}</h2>
            </div>
        </Link>
    )
}

export default PostCard