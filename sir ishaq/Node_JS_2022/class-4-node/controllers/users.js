const bcrypt = require("bcrypt")
const userModel = require("../models/users");

exports.getSignIn = (req, res) => {
    res.render("auth/signin");
};

exports.getSignUp = (req, res) => {
    res.render("auth/signup");
};

exports.postSignIn = async (req, res) => {  // Added req, res
    try {
        const userCred = req.body;
        const user = await userModel.getAUsers(userCred.email)
        const result = await bcrypt.compare(userCred.password, user.password)
        if (result) {
            res.setHeader()
        } else {
            res.send("invalid email and password")
        }
    } catch (err) {
        res.send(err)
    }
    // Implement sign-in logic here
    res.send("Sign-in functionality not yet implemented");
};

exports.postSignUp = async (req, res) => {

    const user = req.body;
    const matched = await userModel.getAUsers(user.email)
        .then((matched) => {
            return res.status(400).send("User already exists");
        })
        .catch(async (err) => {
            try {
                await userModel.storeAUsers(user);
                res.redirect("/signin"); // Added "/" to make it an absolute path
            } catch (err) {
                console.error(err)
            }
        })
};
