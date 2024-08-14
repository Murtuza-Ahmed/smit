const path = require("path");
const fs = require("fs");
const bcrypt = require("bcrypt");

const jsonFilePAth = path.join(process.cwd(), "data", "users.json");
const readData = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(jsonFilePAth, (err, data) => {
            if (err) {
                return reject(err)
            }
            resolve(JSON.parse(data.toString()));
        });
    });
};
const writeData = (data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(jsonFilePAth, JSON.stringify(data), (err) => {
            if (err) {
                return reject(err)
            }
            resolve();
        });
    });
};

exports.createUser = async (email, password, userId) => {
    try {
        const users = await readData();
        const matched = users.find(u => u.email === email);
        if (matched) {
            throw new Error("User Already Exits");
        } else {
            const encPassword = await bcrypt.hash(password, 12);
            // const userId = Date.now();
            await writeData([...users, { email, password: encPassword, userId }]);
        };
    } catch (err) {
        throw err;
    };
};

exports.findUser = async (email) => {
    try {
        const users = await readData();
        const matched = users.find(u => u.email === email);
        return matched;
    } catch (err) {
        throw err;
    }
};