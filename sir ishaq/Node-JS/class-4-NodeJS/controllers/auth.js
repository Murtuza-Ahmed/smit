const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');
const { createUser, findUser } = require("../models/user");
const { SECRET_KEY } = require("../data/key");

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
            var token = jwt.sign({ email }, SECRET_KEY, { expiresIn: '1h' });
            return { token };
        }
        return "Wrong email ID or password";
    } catch (err) {
        throw err;
    }
};
