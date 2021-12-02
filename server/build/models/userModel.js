import mongoose from "mongoose";
const Schema = mongoose.Schema;
// 1. Create an interface representing a document in MongoDB --> imported from IUser
// 2. Create a Schema corresponding to the document interface.
const UserSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: {
        type: String,
        required: true,
        index: { unique: true },
    },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true },
}, { timestamps: true });
export default mongoose.model("User", UserSchema);
