import { Client, ID, Databases, Storage, Query } from "appwrite";   // Importing necessary Appwrite modules
import conf from "../conf/conf";   // Importing environment variables from config file


class DatabaseService {
    client = new Client();   // Initializes Appwrite client
    databases;   // Will hold Databases instance
    storage;   // Will hold Storage instance

    constructor() {
        // Configuring the Appwrite client with endpoint and project ID
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        // Initializing Appwrite services
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }


    // Creates a new post document using the slug as document ID
    async createPost({ title, slug, content, featuredImage, status, userId }) {   // slug is a user-friendly, URL-safe version of a title or name.
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,   // ID of the database
                conf.appwriteCollectionId,   // ID of the posts collection
                slug,   // Slug acts as document ID
                { title, content, featuredImage, status, userId }   // The actual content of the document, stored as fields in Appwrite.
            )

        } catch (error) {
            console.log('Appwrite service :: createPost :: error', error);
        }
    }

    // Updates an existing post document identified by its slug (document ID)
    async updatePost(slug, { title, content, featuredImage, status }) {   // slug will act as the document ID so keeping it separate from the data feilds being updated
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,   // document ID (slug)
                { title, content, featuredImage, status }   // values being updated
            )

        } catch (error) {
            console.log('Appwrite service :: updatePost :: error', error);
        }
    }

    // Deletes a post using its slug (document ID)
    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
            return true

        } catch (error) {
            console.log('Appwrite service :: deletePost :: error', error);
            return false
        }
    }

    // Fetches a single post document by slug
    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );

        } catch (error) {
            console.log('Appwrite service :: getPost :: error', error);
            return false
        }
    }

    // Fetches multiple posts, defaulting to only those with status = "active"
    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries   // array of Appwrite Query filters (e.g., limit, offset, etc.)
            )

        } catch (error) {
            console.log('Appwrite service :: getPosts :: error', error);
            return false
        }
    }

    // File upload services

    // Uploads a file to Appwrite storage
    async uploadFile(file) {
        try {
            return await this.storage.createFile(
                conf.appwriteBucketId,   // Storage bucket ID
                ID.unique(),   // Unique file ID auto-generated
                file   // Actual file object (from form input, etc.)
            );

        } catch (error) {
            console.log('Appwrite service :: uploadFile :: error', error);
            return false
        }
    }

    // Deletes a file from Appwrite storage using its ID
    async deleteFile(fileId) {
        try {
            await this.storage.deleteFile(
                conf.appwriteBucketId,
                fileId
            );
            return true

        } catch (error) {
            console.log('Appwrite service :: deleteFile :: error', error);
            return false
        }
    }

    // Generates and returns a preview URL for a stored file
    getFilePreview(fileId) {
        return this.storage.getFileView(
            conf.appwriteBucketId,
            fileId
        )
    }
}

const databaseService = new DatabaseService();   // Creating and exporting a single instance of the DatabaseService class

export default databaseService;