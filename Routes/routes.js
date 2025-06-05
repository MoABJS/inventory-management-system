import express from "express";
import getProducts from "../Controllers/getProducts.js";
import addProduct from "../Controllers/addProduct.js";
import createUser from "../Controllers/createUser.js";
import loginUser from "../Controllers/loginUser.js";
import productValidation from "../validators/product.validation.js";
import userValidation from "../validators/user.validation.js";
import validate from "../Middlewares/validate.js";
import authorization from "../Middlewares/authorization.js";
import updateProduct from "../Controllers/updateProduct.js";
import deleteProduct from "../Controllers/deleteProduct.js";

const router = express.Router();

router.get("/products", authorization, getProducts);
router.post(
  "/addproduct",
  authorization,
  productValidation,
  validate,
  addProduct
);
router.post("/signup", userValidation, validate, createUser);
router.post("/login", loginUser);
router.put("/update/:productId", updateProduct);
router.delete("/delete/:productId", deleteProduct);

export default router;
