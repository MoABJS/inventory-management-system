import customerModel from "../Models/CustomerModel.js";
import bcrypt from "bcrypt";

const addCustomer = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const existingCustomer = await customerModel.findOne({ email });
    if (existingCustomer) {
      return res
        .status(401)
        .json({ success: false, message: "Customer already exists" });
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    const newCustomer = new customerModel({
      firstName,
      lastName,
      email,
      password: encryptedPassword,
    });

    const savedCustomer = await newCustomer.save();

    const customerWithoutPassword = {
      ...savedCustomer.toObject(),
      password: undefined,
    };
    return res.status(201).json({
      success: true,
      message: "New customer created",
      customer: customerWithoutPassword,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export default addCustomer;
