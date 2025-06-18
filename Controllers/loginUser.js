import jwt from "jsonwebtoken";
import userModel from "../Models/UserModel.js";
import bcrypt from "bcrypt";

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not Found" });
    }

    const userWithoutPassword = { ...user.toObject(), password: undefined };

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res
        .status(404)
        .json({ success: false, message: "User not Found" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });

    res.cookie("jwtToken", token, {
      httpOnly: true,
      secure: true, //I have to change it to true upon completion of project
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      success: true,
      message: "Logged in successfully",
      user: { user: userWithoutPassword },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export default loginUser;
