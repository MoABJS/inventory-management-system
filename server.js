import express from "express";
import dotenv from "dotenv";
import { connectToDB } from "./config/mongodb.js";
import productRoutes from "./Routes/routes.js";

export const app = express();
dotenv.config();
app.use(express.json());

const PORT = process.env.PORT;

connectToDB();
app.use("/api", productRoutes);

app.listen(PORT, () => {
  console.log("Server started with express");
});
