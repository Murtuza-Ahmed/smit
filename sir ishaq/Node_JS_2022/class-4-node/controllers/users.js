const userModel = require("../models/users")

exports.getSignIn = (req, res) => {
    res.render("auth/signin")
}

exports.getSignUp = (req, res) => {
    res.render("auth/signup")
}

exports.postSignIn = () => { }

exports.postSignUp = async (req, res) => {
    try {
        const user = req.body
        const users = await userModel.fetchAll()
        const matched = users.find((u) => u.email === email)

        if (matched) {
            return res.send("user already exits")
        }
        await userModel.storeAUsers(user)
        res.redirect("signin")

    } catch (err) {
        res.send(err)
    }
}