const express = require("express");
const router = express.Router();
const path = require("path");
const productController = require("../controllers/products");
const { authMiddleware } = require("../middlewares/auth")

router.get("/", authMiddleware, productController.fetchAll);

router.get("/form", authMiddleware, productController.getAddProduct);

router.post("/form", authMiddleware, productController.postAddProduct);

module.exports = router;