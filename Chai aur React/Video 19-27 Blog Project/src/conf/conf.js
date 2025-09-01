// Production grade approach
// Creating a config object to store all Appwrite environment variables in one place

const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
}

export default conf   // Exporting this config object so it can be reused throughout the app (clean & maintainable)

/*
Why is this is a "production grade approach"?

1. Centralizes config: Easy to manage and update Appwrite settings in one place.
2. Ensures type safety by casting to String — useful when TypeScript is used or when values might be undefined.
3. Clean and reusable: You can import conf wherever needed without repeating import.meta.env everywhere.
*/