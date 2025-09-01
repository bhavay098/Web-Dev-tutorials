import mongoose from 'mongoose';   // Import mongoose library (used for MongoDB object modeling)

// Define a schema for SubTodo documents
const subTodoSchema = new mongoose.Schema(
  {
    content: { type: String, required: true },   // The main text/content of the sub-todo
    complete: { type: Boolean, default: false },   // Marks whether the sub-todo is complete or not. By default, it will be false (incomplete)
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },   // Reference to the user who created this sub-todo. It stores the ObjectId of a User document from the "User" collection
  },
  { timestamps: true }   // Adds `createdAt` and `updatedAt` fields automatically
);

// Create a model from the schema. This connects the schema with the "subtodos" collection in MongoDB
export const SubTodo = mongoose.model('SubTodo', subTodoSchema);
