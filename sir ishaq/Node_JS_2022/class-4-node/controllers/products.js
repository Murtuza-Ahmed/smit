const Product = require("../models/product");

exports.getAddProduct = (req, res) => {   // Middleware for rendering the form
    res.render("form", { title: "Add Product Form" });
};

exports.postAddProduct = async (req, res) => { // Make it async if saving involves async operations
    try {
        const product = new Product(req.body.title);
        await product.save();  // Use await if save is async
        res.send("Product saved successfully!");
    } catch (err) {
        res.status(500).send("Error saving product: " + err.message);
    }
};

exports.fetchAll = async (req, res) => {
    try {
        const products = await Product.fetchAll(); // Await if fetchAll is async
        res.render("products", { products });
    } catch (err) {
        res.status(500).send("Error fetching products: " + err.message);
    }
};
