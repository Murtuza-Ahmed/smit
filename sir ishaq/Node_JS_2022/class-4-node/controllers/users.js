const bcrypt = require("bcrypt");
const userModel = require("../models/user");

exports.getSignIn = (req, res) => {
    res.render("auth/signin");
};

exports.getSignUp = (req, res) => {
    res.render("auth/signup");
};

exports.postSignIn = async (req, res) => { };

exports.postSignUp = async (req, res) => {
    try {
        const user = req.body();
        console.log(user);
        await userModel.storeAUser(user);
        res.redirect("/auth/signin");
    } catch (err) {
        res.send(err);
    }
};