const Product = require("../models/product");

// const products = [];

exports.getAddProduct = (req, res) => {   // MIDDLE-WERE
    res.render("form", { title: "Add Product Form" });
};

exports.postAddProduct = (req, res) => {
    const product = new Product(req.body.title);
    product.save();
    res.send("saved!");
};

exports.fetchAll = (req, res) => {
    const products = Product.fetchAll();
    res.render("products", {products});
};
