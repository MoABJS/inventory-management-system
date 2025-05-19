import productModel from "../Models/ProductModel.js";

const addProduct = async (req, res) => {
  try {
    const { name, category, price, stock } = req.body;
    const existingProduct = await productModel.findOne({ name });
    console.log(existingProduct);
    // console.log(existingProduct);

    if (existingProduct) {
      return res.status(200).json({
        success: false,
        message: "Product already exists",
      });
    }

    const newProduct = new productModel({ name, category, price, stock });
    const savedProduct = await newProduct.save();
    return res.status(201).json({
      success: true,
      message: "Product Added",
      product: savedProduct,
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

export default addProduct;
