import productModel from "../Models/ProductModel.js";

const getProducts = async (req, res) => {
  try {
    const filter = {};
    const category = req.query.category;

    if (category) filter.category = category;
    const productsData = await productModel.find(filter);

    if (!productsData) {
      return res.status(404).json({
        success: false,
        message: "There are no products found for this category",
      });
    }

    return res.status(200).json({
      success: true,
      count: productsData.length,
      products: productsData,
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

export default getProducts;
