import productModel from "../Models/ProductModel.js";

const getProducts = async (req, res) => {
  try {
    const productsData = await productModel.find();
    return res.status(200).json({ success: true, products: productsData });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

export default getProducts;
