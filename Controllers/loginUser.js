import jwt from "jsonwebtoken";
import userModel from "../Models/UserModel";
import bcrypt from "bcrypt";

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne(email);
  if (!user) {
    return res.status(404).json({ success: false, message: "User not Found" });
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    return res.status(404).json({ success: false, message: "User not Found" });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "1d",
  });

  return res
    .status(200)
    .json({
      success: true,
      message: "Logged in successfully",
      user: { user: user, token: token },
    });
};

export default loginUser;
