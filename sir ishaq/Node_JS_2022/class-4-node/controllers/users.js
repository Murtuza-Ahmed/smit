const userModel = require("../models/users");

exports.getSignIn = (req, res) => {
    res.render("auth/signin");
};

exports.getSignUp = (req, res) => {
    res.render("auth/signup");
};

exports.postSignIn = (req, res) => {  // Added req, res
    // Implement sign-in logic here
    res.send("Sign-in functionality not yet implemented");
};

exports.postSignUp = async (req, res) => {
    try {
        const user = req.body;
        const users = await userModel.fetchAll();
        const matched = users.find((u) => u.email === user.email);

        if (matched) {
            return res.status(400).send("User already exists");
        }

        await userModel.storeAUsers(user);
        res.redirect("/signin"); // Added "/" to make it an absolute path

    } catch (err) {
        res.status(500).send("An error occurred: " + err.message);
    }
};
