import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
dotenv.config();
import { usersRouter } from "./routes/userRoutes.js";
const PORT = Number(process.env.PORT);
const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true })); //parse URL-encoded bodies
app.use(express.json()); //parse JSON bodies
//connect to MongoDB
mongoose.connect(`${process.env.MONGODB_URI}`)
    .then((res) => {
    console.log(`Connected to Mongo Db:`, process.env.DB_NAME);
}).catch(err => {
    console.error('MongoDb connection error:', err);
});
//Setup Routes
app.use('/api/users', usersRouter);
app.listen(PORT, () => {
    console.log(`BuyIt Server running on port: ${PORT}`);
});
