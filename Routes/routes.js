import express from "express";
import getProducts from "../Controllers/getProducts.js";
import addProduct from "../Controllers/addProduct.js";
import createUser from "../Controllers/createUser.js";
import loginUser from "../Controllers/loginUser.js";
import productValidation from "../validators/product.validation.js";
import userValidation from "../validators/user.validation.js";
import validate from "../Middlewares/validate.js";
import authorization from "../Middlewares/authorization.js";
import roleAccess from "../Middlewares/roleAccess.js";
import updateProduct from "../Controllers/updateProduct.js";
import deleteProduct from "../Controllers/deleteProduct.js";
import logoutUser from "../Controllers/logoutUser.js";

const router = express.Router();

router.get(
  "/products",
  authorization,
  roleAccess("admin", "staff", "viewer"),
  getProducts
);
router.post(
  "/addproduct",
  authorization,
  roleAccess("admin"),
  productValidation,
  validate,
  addProduct
);
router.post(
  "/create-user",
  authorization,
  roleAccess("admin"),
  userValidation,
  validate,
  createUser
);
router.post("/login", loginUser);
router.put(
  "/update/:productId",
  authorization,
  roleAccess("admin", "staff"),
  updateProduct
);
router.delete(
  "/delete/:productId",
  authorization,
  roleAccess("admin"),
  deleteProduct
);
router.get("/logout", authorization, logoutUser);

export default router;
