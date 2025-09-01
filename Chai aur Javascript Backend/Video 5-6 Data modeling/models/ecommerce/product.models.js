import mongoose from 'mongoose';

// Schema definition for Product
const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },   // Name of the product (must be provided)
    description: { type: String, required: true },   // Brief details about the product
    productImage: { type: String },   // Optional product image URL (can be empty if no image is uploaded)
    price: { type: Number, default: 0 },   // Price of the product, defaults to 0 if not specified
    stock: { type: Number, default: 0 },   // Available stock quantity, defaults to 0
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },   // Category this product belongs to. References the Category collection (each product must have one category)
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }   // Owner/creator of the product. References the User who listed/added the product
  },
  { timestamps: true }   // Automatically manages createdAt & updatedAt timestamps
);

// Create the Product model from schema. Collection will be stored as "products" in MongoDB
export const Product = mongoose.model('Product', productSchema);
