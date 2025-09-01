import mongoose from 'mongoose';

// Sub-schema for items inside an order
const orderItemSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },   // Reference to the Product being ordered
  quantity: { type: Number, required: true },   // How many units of this product were ordered
});

// Main schema for Orders
const orderSchema = new mongoose.Schema(
  {
    orderPrice: { type: Number, required: true },   // Total price of the order
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },   // Reference to the customer (User who placed the order)
    orderItems: [orderItemSchema],   // List of items included in this order. Each item follows the orderItemSchema
    address: { type: String, required: true },   // Shipping/delivery address
    status: {   // Current status of the order
      type: String,
      enum: ['PENDING', 'CANCELLED', 'DELIVERED'],   // Allowed values
      default: 'PENDING',   // Default value
    },
  },
  { timestamps: true }   // Automatically adds createdAt & updatedAt timestamps
);

// Create the Order model from schema. Collection will be stored as "orders" in MongoDB
export const Order = mongoose.model('Order', orderSchema);
