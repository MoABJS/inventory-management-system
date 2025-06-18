import express from "express";
import dotenv from "dotenv";
import { connectToDB } from "./config/mongodb.js";
import productRoutes from "./Routes/routes.js";
import cookieParser from "cookie-parser";

export const app = express();
dotenv.config();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded());

const PORT = process.env.PORT || 5000;

connectToDB();
app.use("/api", productRoutes);
app.get("/", (req, res) => {
  res.redirect("/api/products");
});

app.listen(PORT, () => {
  console.log("Server started with express");
});
