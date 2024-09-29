const bcrypt = require("bcrypt");
const userModel = require("../models/user");

exports.getSignIn = (req, res) => {
    res.render("auth/sign-in");
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
        res.redirect("sign-in");
    } catch (err) {
        res.send(err);
    }
};