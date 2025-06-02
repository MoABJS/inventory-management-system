import userModel from "../Models/UserModel.js";
import bcrypt from "bcrypt";

const createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password, role } = req.body;
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res
        .status(401)
        .json({ success: false, message: "User already exists" });
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    const newUser = new userModel({
      firstName,
      lastName,
      email,
      password: encryptedPassword,
      role,
    });

    const savedUser = await newUser.save();

    const userWithoutPassword = {
      ...savedUser.toObject(),
      password: undefined,
    };
    return res.status(201).json({
      success: true,
      message: `New ${userWithoutPassword.role} added`,
      customer: userWithoutPassword,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export default createUser;
