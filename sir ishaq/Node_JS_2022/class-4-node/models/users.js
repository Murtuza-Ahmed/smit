const path = require('path');
const fs = require('fs').promises; // Using fs.promises for async support
const bcrypt = require("bcrypt")

const userJsonFile = path.join(__dirname, '..', 'data', 'users.json');

// Asynchronous readFile function
const readFile = async () => {
    try {
        const data = await fs.readFile(userJsonFile, 'utf8');
        return data ? JSON.parse(data) : [];
    } catch (err) {
        if (err.code === 'ENOENT') {
            // If file doesn't exist, return empty array
            return [];
        }
        throw err;
    }
};

// Asynchronous writeFile function
const writeFile = async (dataToWrite) => {
    try {
        await fs.writeFile(userJsonFile, JSON.stringify(dataToWrite, null, 2)); // Pretty print for readability
    } catch (err) {
        throw err;
    }
};

exports.storeAUsers = async (user) => {
    try {
        let data = await readFile(); // Read current data
        user.password = await bcrypt.hash(user.password, 12)
        data.push(user); // Add new user to data array
        await writeFile(data); // Save updated data to file
        return true;
    } catch (err) {
        console.error("Error saving user:", err);
        return false;
    }
};

exports.getAUsers = async (email) => {
    try {
        const users = await readFile();
        const matched = users.find((u) => u.email === email)
        if (matched) {
            return matched
        } else {
            throw new Error("User not found")
        }
    } catch (err) {
        console.error("Error fetching users:", err);
        return [];
    }
}

exports.fetchAll = async () => {
    try {
        return await readFile();
    } catch (err) {
        console.error("Error fetching users:", err);
        return [];
    }
};
