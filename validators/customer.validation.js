import { body } from "express-validator";

const customerValidation = [
  body("firstName")
    .trim()
    .notEmpty()
    .withMessage("First name field is required")
    .isString()
    .withMessage("First name should be a string"),
  body("lastName")
    .trim()
    .notEmpty()
    .withMessage("Last name field is required")
    .isString()
    .withMessage("Last name should be a string"),
  body("email")
    .trim()
    .notEmpty()
    .withMessage("E-mail field is required")
    .isEmail()
    .withMessage("Enter a valid e-mail"),
  body("password")
    .trim()
    .notEmpty()
    .withMessage("Password field is required")
    .isString()
    .withMessage("Password should be a string"),
];

export default customerValidation;
