import {config} from "dotenv";
config();

import express, {Request, Response} from "express";
import mongoose from "mongoose";
import Schema1 from "./models/Schema1";

const PORT = 5000;

const app = express();

app.use(express.json());

app.post("/schema1", async (req: Request, res: Response) => {
    const newSchema = new Schema1({
        title: req.body.title
    });
    const createdSchema = await newSchema.save();
    res.json(createdSchema);
})

mongoose
    .connect(process.env.MONGO_URL!)
    .then(() => {
        console.log(`listening on port ${PORT}`);
})

app.listen(PORT);