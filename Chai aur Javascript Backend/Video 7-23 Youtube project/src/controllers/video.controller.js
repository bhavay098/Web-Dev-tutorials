import { Video } from "../models/video.model.js"
import { User } from "../models/user.model.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import { deleteFromCloudinary, uploadOnCloudinary } from "../utils/cloudinary.js"
import { validateMongoId } from "../utils/validateMongoId.js"


const getAllVideos = asyncHandler(async (req, res) => {
    const { page = 1, limit = 10, query, sortBy, sortType, userId } = req.query
    //TODO: get all videos based on query, sort, pagination
})

const publishVideo = asyncHandler(async (req, res) => {
    // TODO: get video, upload to cloudinary, create video

    const { title, description } = req.body   // Extract title and description from request body

    if (!title || !description) {   // Validate that both title and description are provided
        throw new ApiError(400, 'All fields are required')
    }

    // Extract video file and thumbnail paths from uploaded files. req.files contains multiple files uploaded via multer
    // We're accessing the first file [0] from both 'videoFile' and 'thumbnail' arrays
    const videoLocalPath = req.files?.videoFile?.[0]?.path
    const thumbnailLocalPath = req.files?.thumbnail?.[0]?.path

    if (!videoLocalPath || !thumbnailLocalPath) {   // Check if both files were uploaded
        throw new ApiError(400, 'Both video and thumbnail files are required')
    }

    // Upload video file & thumbnail to Cloudinary and get response with URL and metadata
    const uploadedVideo = await uploadOnCloudinary(videoLocalPath)
    const uploadedThumbnail = await uploadOnCloudinary(thumbnailLocalPath)

    if (!uploadedVideo?.url || !uploadedThumbnail?.url) {   // Verify both uploads were successful by checking if URLs exist
        throw new ApiError(400, 'Error while uploading')
    }

    // Create new video document in database with all necessary fields
    const video = await Video.create({
        videoFile: uploadedVideo.url,   // Cloudinary URL for the video
        videoFilePublicId: uploadedVideo.public_id,   // Cloudinary public ID (needed for deletion)
        thumbnail: uploadedThumbnail.url,   // Cloudinary URL for thumbnail
        thumbnailPublicId: uploadedThumbnail.public_id,   // Cloudinary public ID (needed for deletion)
        title,   // Video title from request
        description,   // Video description from request
        duration: uploadedVideo.duration,   // Video duration from Cloudinary metadata
        owner: req.user?._id   // User ID from authenticated user (via middleware)
    })

    // Return success response with created video data
    return res
        .status(201)
        .json(new ApiResponse(
            201,
            video,
            'Video published successfully'
        ))
})

const getVideoById = asyncHandler(async (req, res) => {
    //TODO: get video by id

    const { videoId } = req.params   // Extract videoId from URL parameters (e.g., /videos/:videoId)
    validateMongoId(videoId, 'Video ID')   // Validate videoId format and existence in req.params before proceeding

    const video = await Video.findById(videoId)   // Query database to find video by its ID

    if (!video) {   // Check if video exists in database. findById returns null if no document is found
        throw new ApiError(404, 'Video not found')
    }

    // Return success response with video data
    return res
        .status(200)
        .json(new ApiResponse(
            200,
            video,
            'Video fetched successfully'
        ))
})

const updateVideo = asyncHandler(async (req, res) => {
    //TODO: update video details like title, description, thumbnail

    const { videoId } = req.params   // Extract videoId from URL parameters (e.g., /videos/:videoId)
    validateMongoId(videoId, 'Video ID')   // Validate videoId format and existence in req.params before proceeding

    // Check if video exists in database before proceeding. This prevents wasting resources on non-existent videos (fail fast approach)
    const oldVideo = await Video.findById(videoId)

    if (!oldVideo) {
        throw new ApiError(404, 'Video not found')
    }

    const { title, description, } = req.body   // Extract title and description from request body

    if (!title || !description) {   // Validate that both title and description are provided
        throw new ApiError(400, 'All fields are required')
    }

    // Extract thumbnail file path from uploaded file. req.file contains single file uploaded via multer
    const thumbnailLocalPath = req.file?.path

    if (!thumbnailLocalPath) {   // Check if thumbnail file was uploaded
        throw new ApiError(400, 'Thumbnail file is missing')
    }

    const thumbnail = await uploadOnCloudinary(thumbnailLocalPath)   // Upload new thumbnail to Cloudinary and get response with URL and metadata

    if (!thumbnail?.url) {   // Verify upload was successful by checking if URL exists
        throw new ApiError(400, 'Error while uploading thumbnail')
    }

    // Update video document in database with new data
    const video = await Video.findByIdAndUpdate(
        videoId,
        {
            $set: {   // $set operator updates only specified fields
                title,   // New title
                description,   // New description
                thumbnail: thumbnail.url,   // New Cloudinary thumbnail URL
                thumbnailPublicId: thumbnail.public_id   // New Cloudinary public ID
            }
        },
        { new: true }   // { new: true } option returns the updated document instead of the old one
    )

    // Delete old thumbnail from Cloudinary after successful update. This keeps cloud storage clean and prevents orphaned files
    // Done after update to ensure we don't lose the old thumbnail if update fails
    await deleteFromCloudinary(oldVideo.thumbnailPublicId)

    // Return success response with updated video data
    return res
        .status(200)
        .json(new ApiResponse(
            200,
            video,
            'Video updated successfully'
        ))
})

const deleteVideo = asyncHandler(async (req, res) => {
    //TODO: delete video

    const { videoId } = req.params   // Extract videoId from URL parameters (e.g., /videos/:videoId)
    validateMongoId(videoId, 'Video ID')   // Validate videoId format and existence in req.params before proceeding

    // Find and delete video in one database operation (optimized approach). Returns the deleted document if found, or null if not found
    const video = await Video.findByIdAndDelete(videoId)

    // Check if video existed in database. If video is null, it means no document was found with that ID
    if (!video) {
        throw new ApiError(404, 'Video not found')
    }

    // Delete video file & thumbnail from Cloudinary using their public ID. This cleans up cloud storage and prevents orphaned files
    await deleteFromCloudinary(video.videoFilePublicId)
    await deleteFromCloudinary(video.thumbnailPublicId)

    // Return success response with empty data object. Empty object is returned since the video no longer exists
    return res
        .status(200)
        .json(new ApiResponse(
            200,
            {},
            'Video deleted successfully'
        ))
})

const togglePublishStatus = asyncHandler(async (req, res) => {
    const { videoId } = req.params   // Extract videoId from URL parameters (e.g., /videos/:videoId/toggle-publish)
    validateMongoId(videoId, 'Video ID')   // Validate videoId format and existence in req.params before proceeding

    const video = await Video.findById(videoId)   // Find video by ID in DB to get current publish status

    if (!video) {   // Check if video exists in database
        throw new ApiError(404, 'Video not found')
    }

    video.isPublished = !video.isPublished   // Toggle the isPublished field (true becomes false, false becomes true). ! operator inverts the boolean value
    await video.save()   // Save the updated video document to database. Using .save() instead of findByIdAndUpdate to work with the existing document

    // Return success response with updated video data
    return res
        .status(200)
        .json(new ApiResponse(
            200,
            video,
            `Video ${video.isPublished ? 'published' : 'unpublished'} successfully`   // Dynamic message based on new publish status using ternary operator
        ))
})


export {
    getAllVideos,
    publishVideo,
    getVideoById,
    updateVideo,
    deleteVideo,
    togglePublishStatus
}