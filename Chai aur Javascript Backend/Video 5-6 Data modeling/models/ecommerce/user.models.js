import mongoose from 'mongoose';

// Schema definition for User
const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true, lowercase: true },   // Unique username of the user. Always stored in lowercase
    email: { type: String, required: true, unique: true, lowercase: true },   // Unique email address of the user. stored in lowercase to avoid case-sensitive duplicates
    password: { type: String, required: true },   // Password of the user (must be stored in hashed form in production)
  },
  { timestamps: true }   // Automatically adds createdAt & updatedAt fields
);

// Create the User model from schema. MongoDB will store this collection as "users"
export const User = mongoose.model('User', userSchema);