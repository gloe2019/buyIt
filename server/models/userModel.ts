import mongoose from 'mongoose';

const Schema = mongoose.Schema
// 1. Create an interface representing a document in MongoDB.
interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  isAdmin: boolean;
  // createDate: Date
  // updateDate: Date
}

// 2. Create a Schema corresponding to the document interface.
const userSchema: mongoose.Schema = new Schema<User>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, required: true },
},
  { timestamps: true }
);

export default mongoose.model<User>('User', userSchema)