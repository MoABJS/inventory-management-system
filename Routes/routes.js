import express from "express";
import getProducts from "../Controllers/getProducts.js";
import addProduct from "../Controllers/addProduct.js";
import createUser from "../Controllers/createUser.js";
import productValidation from "../validators/product.validation.js";
import userValidation from "../validators/user.validation.js";
import validate from "../validators/validate.js";

const router = express.Router();

router.get("/products", getProducts);
router.post("/addproduct", productValidation, validate, addProduct);
router.post("/signup", userValidation, validate, createUser);

export default router;
