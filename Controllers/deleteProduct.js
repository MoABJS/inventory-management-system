import mongoose from "mongoose";
import productModel from "../Models/ProductModel.js";

const deleteProduct = async (req, res) => {
  const productId = req.params.productId;

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

  const deletedProduct = await productModel.findByIdAndDelete(productId);

  return res.status(200).json({
    success: true,
    message: `${deletedProduct.name} products has been deleted`,
    product: deletedProduct,
  });
};

export default deleteProduct;
