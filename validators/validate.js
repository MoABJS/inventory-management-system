import { validationResult } from "express-validator";

const validate = (req, res, next) => {
  const results = validationResult(req);
  // console.log(results);
  // console.log(results.array());
  // console.log(results.isEmpty());

  if (!results.isEmpty()) {
    return res.status(400).json({ results: results.array() });
  }
  next();
};

export default validate;
