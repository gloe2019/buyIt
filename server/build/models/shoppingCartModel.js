import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ShoppingCartSchema = new Schema({
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
export default mongoose.model("Shopping Cart", ShoppingCartSchema);
