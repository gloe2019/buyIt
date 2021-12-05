import mongoose from "mongoose";
const Schema = mongoose.Schema;
const OrderSchema = new Schema({
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
    dateAdded: {
        type: Date,
        default: new Date(),
    },
});
export default mongoose.model("Order", OrderSchema);
