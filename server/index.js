import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routers/userRoute.js';
import itemRouter from './routers/itemRoute.js';

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const mongoUrl = process.env.MONGO_URL;

mongoose.connect(mongoUrl)
    .then(() => {
        console.log('MongoDB connected');

        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.log(err);
    });

app.use("/user", userRouter);
app.use("/item", itemRouter);