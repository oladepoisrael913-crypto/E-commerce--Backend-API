const express = require("express");
const upload = require("../Config/multer.js");
const {
	uploadProduct,
	
	getAllProducts,
	updateProduct,
	deleteProduct
} = require("../controller/productController.js");

const router = express.Router();

router.post("/upload/:userId", upload.single("image"), uploadProduct);
router.get("/getSingle/:productId", getAllProducts);
router.patch("/update/:productId", upload.single("image"), updateProduct);
router.delete("/delete/:productId", upload.single("image"), deleteProduct);
router.get("/getAll", getAllProducts);
module.exports = router;
