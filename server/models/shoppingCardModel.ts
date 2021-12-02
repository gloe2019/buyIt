import mongoose, { Schema } from "mongoose";

interface ShoppingCart {
  userId: string;
  items: { productId: string; name: string; quantity: number; price: number }[];
  total: number;
}

const ShoppingCartSchema: Schema = new Schema<ShoppingCart>({
  userId: {
    type: String,
    required: true,
  },
  items: [
    {
      productId: {
        type: String,
        required: true,
      },
      name: { type: String },
      quantity: {
        type: Number,
        min: [1],
        required: true,
      },
      price: { type: Number },
    },
  ],
  total: {
    type: Number,
    required: true,
  },
});

export default mongoose.model<ShoppingCart>(
  "Shopping Cart",
  ShoppingCartSchema
);
