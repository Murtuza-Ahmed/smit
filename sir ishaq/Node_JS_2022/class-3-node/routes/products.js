const express = require("express");
const router = express.Router();
const path = require("path");
const productController = require("../controllers/products");

router.get("/form", productController.getAddProduct);
router.post("/form", productController.postAddProduct);


module.exports = router;