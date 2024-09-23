const products = [];

exports.getAddProduct = (req, res) => {   // MIDDLE-WERE
    res.render("form", { title: "Add Product Form" });
};

exports.postAddProduct = (req, res) => {
    products.push(req.body);
    res.send("saved!");
};

exports.fetchAll = (req, res) => {
    res.render("products", {products});
};
