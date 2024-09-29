const bcrypt = require("bcrypt");
const userModel = require("../models/user");

exports.getSignIn = (req, res) => {
    res.render("/auth/signin");
};

exports.getSignUp = (req, res) => {
    res.render("/auth/signup");
};

exports.postSignIn = async (req, res) => { };

exports.postSignUp = async (req, res) => {
    try {
        const user = req.body();
        const users = await userModel.fetchAll();
        const matched = users.find((u) => u.email === user.email);
        if (matched) {
            return res.send("User Already Exits");
        }
        await userModel.storeAUser(user);
        res.redirect("sign-in");
    } catch (err) {
        res.send(err);
    }
};