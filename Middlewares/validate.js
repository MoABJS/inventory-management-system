import { validationResult } from "express-validator";

const validate = (req, res, next) => {
  const results = validationResult(req);

  if (!results.isEmpty()) {
    return res.status(400).json({ results: results.array() });
  }
  next();
};

export default validate;
