import express from "express";

import bodyParser from "body-parser";

import mongoose from "mongoose";

import productRouter from "./routes/productRouter.js";

const app = express();

const mongodbUrl = "mongodb+srv://admin:123@cluster0.8cdbo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongodbUrl,{})

const connection = mongoose.connection

connection.once("open",()=>{
    console.log("Database connected")
})

app.use(bodyParser.json())

app.use("/api/products",productRouter)

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});