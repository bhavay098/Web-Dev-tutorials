import React, { useEffect, useCallback } from 'react'
import { useForm } from 'react-hook-form'   // For form state management
import { Button, Input, Select, RTE } from '../index'   // Custom components
import appwriteService from '../../appwrite/config'   // Custom Appwrite service
import { useNavigate } from 'react-router-dom'   // To programmatically redirect
import { useSelector } from 'react-redux'   // To access auth data from Redux

// PostForm component used for both creating and editing a post
function PostForm({ post }) {
    // Initializing React Hook Form with default values
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || '',   // Pre-fill title if editing
            slug: post?.slug || '',   // Pre-fill slug
            content: post?.content || '',   // Pre-fill content
            status: post?.status || 'active'   // Default status is "active"
        }
    });

    const navigate = useNavigate();   // Used to redirect after form submit
    const userData = useSelector((state) => state.auth.userData)   // Get logged-in user's data. used to attach userId to a post when creating.

    // Function to handle form submission (create or update)
    const submit = async (data) => {
        // UPDATING EXISTING POST
        if (post) {   // always handle file first while updating post
            const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null   // Upload a new image if selected

            if (file) {   // If a new image was uploaded, delete the old one
                await appwriteService.deleteFile(post.featuredImage)
            }

            const updatedPost = await appwriteService.updatePost(post.$id, {   // Send update request to backend
                ...data,
                featuredImage: file ? file.$id : undefined   // If new file, update ID otherwise keep old id
            })

            if (updatedPost) {   // If successful, redirect to updated post page
                navigate(`/post/${updatedPost.$id}`)
            }

        } else {
            // CREATING NEW POST
            const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null

            if (file) {
                const fileId = file.$id;
                data.featuredImage = fileId   // Update uploaded image ID to post data
            }
            const newPost = await appwriteService.createPost({   // Create post in backend
                ...data,
                userId: userData.$id   // Attach logged-in user's ID to post
            })

            if (newPost) {   // If successful, redirect to new post page
                navigate(`/post/${newPost.$id}`)
            }

        }
    }

    // Slug generator: converts title into a URL-friendly slug
    const slugTransform = useCallback((value) => {
        if (value && typeof value === 'string') {
            return value
                .trim()
                .toLowerCase()
                .replace(/[^\w\s-]/g, '')   // Remove special characters
                .replace(/\s+/g, '-')       // Replace any whitespace (space, tab, etc.) with a single dash
                .replace(/-+/g, '-')        // Collapse multiple dashes into one
                .replace(/^-+|-+$/g, '')    // Remove dashes from start and end
        }
        return ''   // return empty string if value doesn't exist
    }, [])

    // +++++++++ IMP FOR INTERVIEW ++++++++++++++++++++++++
    // Auto-generate slug from title using useEffect + watch
    useEffect(() => {
        // Listen for changes to the "title" field
        const subscription = watch((value, { name }) => {   // value -> the current form values | name -> the name of the field that just changed
            if (name === 'title') {
                // When title changes, auto-generate and update slug
                setValue('slug', slugTransform(value.title), { shouldValidate: true })   // setValue(fieldName, newValue, options?)   
            }
        })   // watch() call returns a subscription object, which we can later use to stop listening — just like with event listeners or observers.

        return () => {   // Clean up the subscription when component unmounts to prevent Memory leaks, Unexpected behavior, Extra performance cost
            subscription.unsubscribe()
        }
    }, [watch, slugTransform, setValue])

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            
            {/* LEFT COLUMN: Title, Slug, and Content */}
            <div className="w-2/3 px-2">
                {/* Post Title Input */}
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />

                {/* Post Slug Input (auto-transformed) */}
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {   // Update slug manually when typing in slug field
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />

                {/* Rich Text Editor for post content */}
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>

            {/* RIGHT COLUMN: Image, Status, and Submit */}
            <div className="w-1/3 px-2">
                {/* Image Upload Field */}
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image")} 
                />

                {/* Show existing image if editing a post */}
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}   // Preview from Appwrite
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}

                {/* Status Dropdown */}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />

                {/* Submit Button */}
                <Button
                    type="submit"
                    bgColor={post ? "bg-green-500" : undefined}   // Green button if updating
                    className="w-full"
                >
                    {post ? "Update" : "Submit"}   {/* Button text based on mode */}
                </Button>
            </div>
        </form>
    )
}

export default PostForm