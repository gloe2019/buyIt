import mongoose, { Schema } from "mongoose";

// const Schema = mongoose.Schema;

interface Product {
  name: string;
  description: string;
  category: string;
  image: string;
  price: number;
  quantity: number;
}

const ProductSchema: Schema = new Schema<Product>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<Product>("Product", ProductSchema);
