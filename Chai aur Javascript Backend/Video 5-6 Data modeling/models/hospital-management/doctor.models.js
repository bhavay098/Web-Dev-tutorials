import mongoose from 'mongoose';

// Define the structure (schema) for the "Doctor" collection
const doctorSchema = new mongoose.Schema(
  {
    name: {   // Doctor's name -> required string
      type: String,
      required: true,
    },
    salary: {   // Doctor's salary -> stored as string (required)
      type: String,
      required: true,
    },
    qualification: {   // Doctor's qualification (e.g., MBBS, MD) → required string
      type: String,
      required: true,
    },
    experienceInYears: {   // Years of experience -> number (defaults to 0 if not provided)
      type: Number,
      default: 0,
    },
    worksInHospitals: [   // Array of hospitals the doctor works in. Each item is an ObjectId that references the Hospital collection
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
      },
    ],
  },
  { timestamps: true }   // Adds createdAt and updatedAt fields automatically
);

// Create a Model called "Doctor" from the schema. "Doctor" -> Model name. Mongoose will store documents inside "doctors" collection (lowercase + plural)
export const Doctor = mongoose.model('Doctor', doctorSchema);
