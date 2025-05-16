import express from "express";
import getProducts from "../Controllers/getProducts.js";
import addProduct from "../Controllers/addProduct.js";

const router = express.Router();

router.get("/products", getProducts);
router.post("/addproduct", addProduct);

export default router;
