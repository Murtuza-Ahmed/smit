import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "src", "data", "users.json");  // currentWorkingDirectry

export function getAll() {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
}

export function getById(id) {
    const data = getAll();
    return data.find((p) => {
        return p.id === Number(id)
    })
}


export function getByEmail(email) {
    const data = getAll();
    return data.find((p) => {
        return p.email.toLowerCase() === email.toLowerCase()
    })
}

export function save(email, password) {
    const data = getAll();
    data.push({
        id: data.length + 1,
        title, description, prices
    });
    fs.writeFileSync(filePath, JSON.stringify(data));
}