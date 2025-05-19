import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: {
        values: ["electronics", "clothing", "groceries", "books"],
        message: "{VALUE} is not a valid category",
      },
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const productModel = mongoose.model("products", productSchema);

export default productModel;
