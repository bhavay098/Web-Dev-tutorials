import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";   // For routing/navigation
import appwriteService from "../appwrite/config";   // Service to interact with Appwrite backend
import { Button, Container } from "../components";   // Custom UI components
import parse from "html-react-parser";   // Parses HTML strings into React elements
import { useSelector } from "react-redux";   // For accessing global Redux state

export default function Post() {
    const [post, setPost] = useState(null);   // Local state to hold current post data, starts as null (no post loaded)
    const { slug } = useParams();   // Extract the "slug" parameter from the URL (used as the document ID in Appwrite e.g., /post/my-post-slug)
    const navigate = useNavigate();   // For redirecting programmatically

    const userData = useSelector((state) => state.auth.userData);   // Get logged-in user data from Redux store's auth state

    // Boolean to check if the current logged-in user is the author of the post. Only true if `post` and `userData` exist, and the IDs match
    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {   // Fetch the post from Appwrite when the component mounts or slug/navigate changes
        if (slug) {   // Only fetch post if slug exists in URL
            appwriteService.getPost(slug)   // Fetch post data using slug from URL
                .then((post) => {
                    if (post) setPost(post);   // If post was found, update state with post data
                    else navigate("/");   // If no post found, redirect to home page
                })
                .catch((error) => console.log('Failed to fetch post:', error))   // Log any errors that occur during fetch

        } else navigate("/");   // If no slug in URL, redirect to home page
    }, [slug, navigate]);

    // Function to delete the post and its associated image file
    const deletePost = () => {
        appwriteService.deletePost(post.$id)   // Delete the post by its ID
            .then((status) => {
                if (status) {
                    appwriteService.deleteFile(post.featuredImage)   // If post deletion is successful, delete the associated featured image file
                        .then(() => navigate('/all-posts'))   // After deleting file, redirect to home page
                        .catch((error) => console.error("File deletion failed:", error))
                }
            })
            .catch((error) => console.error("Failed to delete post:", error))   // Log error if post deletion fails
    };

    // Only render the post if it exists, otherwise render nothing (null)
    return post && userData ? (
        <div className="py-8">
            <Container>
                {/* Featured Image Section with Edit/Delete buttons */}
                <div className="w-full flex justify-center mb-4 relative p-2">
                    {/* only render image if it has been uploaded */}
                    {post.featuredImage && (
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}   // Generate image preview URL from Appwrite
                            alt={post.title}
                            className="rounded-xl"
                        />
                    )}


                    {/* If the logged-in user is the author, show Edit/Delete buttons */}
                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            {/* Edit button - navigates to edit page for this post */}
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="mr-3">
                                    Edit
                                </Button>
                            </Link>
                            {/* Delete button - calls deletePost function when clicked */}
                            <Button bgColor="bg-red-500" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>

                {/* Post title */}
                <div className="w-full mb-6">
                    <h1 className="text-2xl font-bold">{post.title}</h1>
                </div>

                {/* Post content (HTML string parsed into React elements) */}
                <div className="browser-css">
                    {parse(post.content)}
                </div>
            </Container>
        </div>
    ) : <div className="py-8 text-center">Loading post...</div>;   // If no post loaded yet, render nothing
}