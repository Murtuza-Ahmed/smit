const mongoose = require("mongoose");

// const productSchema = new mongoose.Schema({
//     title: String,
//     price: Number,
// });

const blogSchema = new mongoose.Schema({
    title: String,
    author: String,
    body: String,
    email: { type: String, unique: true },
    password: { type: String, select: false },
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: { votes: Number, favs: Number }
});

const Product = mongoose.model("Product", blogSchema);

module.exports = Product;