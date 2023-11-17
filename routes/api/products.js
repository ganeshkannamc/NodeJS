const express = require("express");
const router = express.Router();

const { getAllProducts,addProduct,editProduct,deleteProduct,searchProduct } = require("../../controller/productsController");

router.route("/").get(getAllProducts).post(addProduct).put(editProduct).delete(deleteProduct);
router.route('/search').post(searchProduct)

module.exports = router;
