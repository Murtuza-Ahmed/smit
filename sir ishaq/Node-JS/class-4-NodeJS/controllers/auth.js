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
        if (!!user && user.password === password) {     // not not user true OR false ki value he !!
            return "Login Successfully";
        }
        return "Worng email Id or password";
    } catch (err) {
        throw err;
    }
};