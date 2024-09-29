const path = requier("path");
const fs = require("fs");

const userJsonFile = path.join(__dirname, "..", "data", "users.json");

const readFile = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(userJsonFile, (err, data) => {
            if (err) {
                reject(err);
            } else {
                const dataString = data.toString();
                if (dataString) {
                    resolve(JSON.parse(dataString));
                } else {
                    resolve([]);
                };
            };
        });
    });
};

const writeFile = (dataToWrite) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(userJsonFile, dataToWrite, (err) => {
            if (err) {
                return reject(err);
            }
            resolve();
        });
    });
};

const storeAUser = async (user) => {
    try {
        let data = await readFile();
        if (data) {
            data.push(user);
        } else {
            data = [user];
        };
        await writeFile();
    } catch (err) {
        console.error(err);
    };
};

module.exports = storeAUser;