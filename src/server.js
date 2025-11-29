import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from '../routes/userRoutes.js';

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
}));

app.use("/api/users", userRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("Connected!");
    app.listen(process.env.PORT || 5000, () => {
        console.log(`Running on port ${process.env.PORT || 5000}`);
    });
}).catch(err => console.log("Connection Failed", err));
