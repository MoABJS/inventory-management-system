import { body } from "express-validator";

const productValidation = [
  body("name").trim().notEmpty().withMessage("Name should not be empty"),
  body("category")
    .trim()
    .isString()
    .withMessage("Category should be a non numeric value")
    .notEmpty()
    .withMessage("Category should not be empty"),
  body("price")
    .trim()
    .isNumeric()
    .withMessage("Price should be a number")
    .notEmpty()
    .withMessage("Price should not be empty"),
  body("stock")
    .trim()
    .isNumeric()
    .withMessage("Stock should be a number")
    .notEmpty()
    .withMessage("Stock should not be empty"),
];

export default productValidation;
