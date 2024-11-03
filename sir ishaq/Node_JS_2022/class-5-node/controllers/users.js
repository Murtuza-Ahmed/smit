const bcrypt = require("bcrypt")
const userModel = require("../models/users");

exports.getSignIn = (req, res) => {
    res.render("auth/signin");
};

exports.getSignUp = (req, res) => {
    res.render("auth/signup");
};

exports.postSignIn = async (req, res) => {
    try {
        const userCred = req.body;
        const user = await userModel.getAUsers(userCred.email);
        const result = await bcrypt.compare(userCred.password, user.password);

        if (result) {
            // res.setHeader("Set-Cookie", "isAuthenticated=true; HttpOnly")
            req.session.user = userCred.email;
            res.send("Login Successfully");
        } else {
            res.send("Invalid email and password");
        }
    } catch (err) {
        res.send(err);
    }
};


exports.postSignUp = async (req, res) => {
    const user = req.body;

    const matchedUser = await userModel.getAUsers(user.email);
    if (matchedUser) {
        return res.status(400).send("User already exists");
    }

    try {
        await userModel.storeAUsers(user);
        res.redirect("/signin");
    } catch (err) {
        console.error(err);
        res.status(500).send("An error occurred during sign-up");
    }
};

