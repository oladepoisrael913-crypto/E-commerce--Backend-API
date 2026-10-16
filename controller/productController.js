const productModel = require("../model/productModel.js");
const userModel = require("../model/userModel.js");
const cloudinary = require("../Config/cloudinary.js");
/** create: upload product */

const uploadProduct = async (req, res) => {
  try {
    const getUserId = await userModel.findById(req.params.userId);
    const { name, description, price, quantity, category, stock } = req.body;

    if (!getUserId) {
      return res.status(404).json({ message: "User not found" });
    }

    if (!req.file) {
      return res
        .status(400)
        .json({ message: "No image file provided, please upload an image" });
    }

    const result = await cloudinary.uploader.upload(req.file.path);
    const imageUrl = result.secure_url;

    const newProduct = await productModel.create({
      name,
      description,
      price,
      quantity,
      category,
      stock,
      image: imageUrl,
    });

    getUserId.products.push(newProduct._id);
    await getUserId.save();

    return res.status(201).json({
      message: "Product uploaded successfully",
      product: newProduct,
    });
  } catch (error) {
    return res.status(500).json({ message: "Error uploading product", error });
  }
};

// get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await productModel.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error });
  }
};

// update product
const updateProduct = async (req, res) => {
  try {
    const { name, description, price, quantity, category, stock } = req.body;
    const product = await productModel.findByIdAndUpdate(
      req.params.productId,
      {
        name,
        description,
        price,
        quantity,
        category,
        stock,
        image: req.file ? (await cloudinary.uploader.upload(req.file.path)).secure_url : undefined,
      },
      { new: true }
    );
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Error updating product", error });
  }
};

// delete product
const deleteProduct = async (req, res) => {
  try {
    const product = await productModel.findByIdAndDelete(req.params.productId);
    res.status(200).json({ message: "Product deleted successfully", product });
  } catch (error) {
    res.status(500).json({ message: "Error deleting product", error });
  }
};

module.exports = { uploadProduct, getAllProducts, updateProduct, deleteProduct };