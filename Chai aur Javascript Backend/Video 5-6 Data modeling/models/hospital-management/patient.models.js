import mongoose from 'mongoose';

// Define the structure (schema) for the "Patient" collection
const patientSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },   // Patient's full name -> required string
    diagnosedWith: { type: String, required: true },   // Disease or condition the patient is diagnosed with -> required string
    address: { type: String, required: true },   // Patient's address -> required string
    age: { type: Number, required: true },   // Patient's age -> required number
    bloodGroup: { type: String, required: true },   // Patient's blood group -> required string
    gender: { type: String, enum: ['M', 'F', 'O'], required: true },   // Patient's gender -> can only be one of "M", "F", or "O". enum restricts the value to these specific options
    admittedIn: { type: mongoose.Schema.Types.ObjectId, ref: 'Hospital' },   // Reference to the Hospital where the patient is admitted. Stores the _id of a Hospital document
  },
  { timestamps: true }   // Adds createdAt and updatedAt fields automatically
);

// Create a Model called "Patient" from the schema
export const Patient = mongoose.model('Patient', patientSchema);