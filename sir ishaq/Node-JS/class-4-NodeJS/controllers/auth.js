const bcrypt = require("bcrypt");
const { createUser, findUser } = require("../models/user");

exports.createUser = async (email, password) => {
    try {
        const userId = Date.now();
        await createUser(email, password, userId);
    } catch (err) {
        throw err;
    }
};

exports.login = async (email, password) => {
    try {
        const user = await findUser(email);
        if (!user) {
            return "Wrong email ID or password";
        }
        const result = await bcrypt.compare(password, user.password);
        if (result) {
            return "Login Successfully";
        }
        return "Wrong email ID or password";
    } catch (err) {
        throw err;
    }
};
