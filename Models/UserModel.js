import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "staff", "viewer"],
      default: "viewer",
    },
  },
  { versionKey: false, timestamps: true }
);

const userModel = mongoose.model("users", userSchema);

export default userModel;
