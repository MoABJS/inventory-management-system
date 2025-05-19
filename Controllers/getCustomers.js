import customerModel from "../Models/CustomerModel.js";

const getCustomers = async (req, res) => {
  try {
    const customersData = await customerModel.find();
    return res.status(200).json({ success: true, customers: customersData });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export default getCustomers;
