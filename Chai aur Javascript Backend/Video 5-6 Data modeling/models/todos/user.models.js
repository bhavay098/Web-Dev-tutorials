import mongoose from 'mongoose';

// Define the structure (schema) for the "User" collection
const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true, lowercase: true },   // username field -> must be a String, required, unique, and always stored in lowercase
    email: { type: String, required: true, unique: true, lowercase: true },   // email field -> must be a String, required, unique, and always stored in lowercase
    password: { type: String, required: true },   // password field -> must be a String and required
  },
  { timestamps: true }   // Adds createdAt and updatedAt fields automatically
);

// Create a Model called "User" from the schema. "User" -> Model name (PascalCase, singular)
export const User = mongoose.model('User', userSchema);   // "User" -> Model name (Mongoose automatically converts this to a MongoDB collection name: "users" (lowercase + plural))