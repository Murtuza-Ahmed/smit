const path = require("path");
const fs = require("fs");

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
            // const userId = Date.now();
            await writeData([...users, { email, password, userId }]);
        };
    } catch (err) {
        throw err;
    };
};