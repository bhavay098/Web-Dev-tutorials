import mongoose from 'mongoose';

// Define the structure (schema) for the "Category" collection
const categorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },   // Category name -> required string. Example: "Electronics", "Clothing", "Furniture"
  },
  { timestamps: true }   // Adds createdAt and updatedAt fields automatically
);

// Create a Model called "Category" from the schema. Collection name will be "categories" in MongoDB (lowercase + plural)
export const Category = mongoose.model('Category', categorySchema);
