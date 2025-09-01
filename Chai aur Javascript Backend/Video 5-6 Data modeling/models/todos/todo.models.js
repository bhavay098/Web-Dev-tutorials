import mongoose from 'mongoose';

// Define the structure (schema) for the "Todo" collection
const todoSchema = new mongoose.Schema(
  {
    content: { type: String, required: true },   // content field → text of the todo (required string)
    complete: { type: Boolean, default: false },   // complete field → whether the todo is done or not (defaults to false)
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },   // createdBy field → stores the ID of the User who created this todo. ref: 'User' → means it references the User model (relationship between Todo and User)
    subTodos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SubTodo' }],   // subTodos field → an array of IDs that reference SubTodo documents. ref: 'SubTodo' → creates a one-to-many relationship between Todo and SubTodos
  },
  { timestamps: true }   // Adds createdAt and updatedAt fields automatically
);

// Create a Model called "Todo" from the schema. "Todo" → Model name (PascalCase, singular)
// Mongoose automatically makes the MongoDB collection name "todos" (lowercase + plural)
export const Todo = mongoose.model('Todo', todoSchema);