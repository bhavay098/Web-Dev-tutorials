// ++++++++++++++++++++ PRODUCTION GRADE CODE ++++++++++++++++++++++++++++++++++++++


// Importing Appwrite configuration and SDKs
import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf.js";

// creating a class because we want to encapsulate all authentication logic in one organized, reusable place — like a toolbox dedicated only to login/signup/logout. Further in future if we wanna change our backend service provider, we can just make changes in this class and our app will work as it is
class AuthService {
    
    // Class Fields - Initializes properties with default values
    client = new Client();   // Create a new Appwrite client instance
    account;   // Declare the 'account' property (initialize later in constructor)

    // Constructor: runs automatically when `new AuthService()` is called
    constructor() {
        this.client   // Set up the Appwrite client with endpoint & project ID from conf file
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        // Initialize the Account service using the configured client
        this.account = new Account(this.client);   // this.client Refers to the client property of the object (instance of AuthService)
    }

    // Create Account: Registers a new user with email, password, and name
    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)   // Create a new user in Appwrite using unique ID

            if (userAccount) {
                // call login method
                return this.login({ email, password });   // If account created successfully, auto-login the user

            } else {
                return userAccount;   // fallback return
            }

        } catch (error) {
            throw error;   // Pass the error to the UI or calling function to handle it
        }
    }

    // Login: Starts a session (i.e., logs user in)
    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);   // Appwrite creates a session with provided credentials

        } catch (error) {
            throw error
        }
    }

    // Get Current User: Fetches the currently logged-in user's details (checks whether the user is logged in or not)
    async getCurrentUser() {
        try {
            return await this.account.get();   // Returns user if session is active

        } catch (error) {
            console.log('Appwrite service :: getCurrentUser :: error ::', error);   // Log error for debugging and pass it up
        }
        return null;   // fallback return (just in case)
    }

    // Logout: Ends the current session for the user
    async logout() {
        try {
            await this.account.deleteSessions();   // Delete all user sessions (logs out everywhere)

        } catch (error) {
            console.log('Appwrite service :: logout :: error', error);   // Log error for debugging and rethrow it
            throw error
        }
    }
}

const authService = new AuthService();   // Create an instance of AuthService to use throughout the app

export default authService;   // Export the instance to use it wherever needed