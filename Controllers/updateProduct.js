import mongoose from "mongoose";
import productModel from "../Models/ProductModel.js";

const updateProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    const editableFields = ["price", "stock"];

    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(404).json({
        success: false,
        message: "Invalid product ID",
      });
    }

    const product = await productModel.findById(productId);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "No product found",
      });
    }

    console.log(Object.entries(req.body));

    const updates = Object.fromEntries(
      Object.entries(req.body).filter(([key]) => editableFields.includes(key))
    );

    console.log(updates);

    const updatedProduct = await productModel.findByIdAndUpdate(
      productId,
      updates,
      { new: true }
    );

    return res.status(201).json({
      success: true,
      message: `${updatedProduct.name} has been updated`,
      product: updatedProduct,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export default updateProduct;
