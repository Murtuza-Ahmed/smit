const path = require("path");
const fs = require("fs");

const userJsonFile = path.join(__dirname, "..", "data", "users.json");

const readFile = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(userJsonFile, (err, data) => {
            if (err) {
                return reject(err);
            }
            const dataString = data.toString();
            if (dataString) {
                resolve(JSON.parse(dataString));
            } else {
                resolve([]);
            }
        })
    });
};

const writeFile = (dataToWrite) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(userJsonFile, JSON.stringify(dataToWrite), (err) => {
            if (err) {
                return reject(err);
            }
            resolve();
        });
    });
};

exports.storeAUser = async (user) => {
    try {
        let data = await readFile();
        if (data) {
            data.push(user);
        } else {
            data = [user];
        };
        await writeFile(data);
        return true;
    } catch (err) {
        console.error(err);
    };
};

exports.fetchAll = async () => {
    try {
        return await readFile();
    } catch (err) { console.error(err) };
};