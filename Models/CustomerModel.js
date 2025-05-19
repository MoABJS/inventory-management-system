import mongoose from "mongoose";

const customerSchema = new mongoose.Schema(
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
    membership: {
      type: String,
      enum: ["gold", "silver", "bronze"],
      default: "bronze",
    },
    purchases: {
      type: [String],
    },
  },
  { versionKey: false, timestamps: true }
);

const customerModel = mongoose.model("customers", customerSchema);

export default customerModel;
