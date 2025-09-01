import mongoose from 'mongoose';

// Define the structure (schema) for the "Hospital" collection
const hospitalSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },   // Hospital name -> required string
    addressLine1: { type: String, required: true },   // First line of address (e.g., street/area) -> required string
    addressLine2: { type: String },   // Second line of address (e.g., landmark, building name) -> optional string
    city: { type: String, required: true },   // City where hospital is located -> required string
    pincode: { type: String, required: true },   // Pincode (postal code) -> required string
    specializedIn: [{ type: String }],   // Array of specializations. Example: ["Cardiology", "Orthopedics", "Dermatology"]
  },
  { timestamps: true }   // Adds createdAt and updatedAt fields automatically
);

// Create a Model called "Hospital" from the schema. "Hospital" → Model name. Mongoose will store documents inside "hospitals" collection (lowercase + plural)
export const Hospital = mongoose.model('Hospital', hospitalSchema);
