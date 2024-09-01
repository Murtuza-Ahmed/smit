const express = require("express");
const router = express.Router();
const products = require("../data/products.json");
const Product = require("../models/db/product");

router.get("/", (req, res) => {
    res.json(products);
});

router.post("/", async (req, res) => {
    const product = new Product({
        title: req.body.title,
        price: req.body.price,
    });
    const resp = await product.save();
    res.send(resp);
});

// router.get("/:title", async (req, res) => {
//     const resp = await Product.findOne({ title: req.params.title });
//     res.send(resp);
// });

router.get("/:id", async (req, res) => {
    const resp = await Product.findById(req.params.id);
    res.send(resp);
});

module.exports = router;