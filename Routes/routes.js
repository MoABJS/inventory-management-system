import express from "express";
import getProducts from "../Controllers/getProducts.js";
import addProduct from "../Controllers/addProduct.js";
import getCustomers from "../Controllers/getCustomers.js";
import addCustomer from "../Controllers/addCustomer.js";
import productValidation from "../validators/product.validation.js";
import customerValidation from "../validators/customer.validation.js";
import validate from "../validators/validate.js";

const router = express.Router();

router.get("/products", getProducts);
router.post("/addproduct", productValidation, validate, addProduct);
router.get("/customers", getCustomers);
router.post("/addcustomer", customerValidation, validate, addCustomer);

export default router;
