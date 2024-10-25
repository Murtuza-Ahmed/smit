import fs from "fs";
import path from "path";
import { compare, hash } from "bcryptjs";

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

export async function verifyPassword(hashedPassword, password) {
    const isValid = await compare(password, hashedPassword);
    return isValid;
}

export async function save(email, password) {
    const found = getAll(email);
    if (found) {
        throw new Error("Users All Ready Exits");
    }
    const data = getAll();
    const hashedPassword = await hash(password, 12)
    data.push({
        id: data.length + 1,
        email,
        password: hashedPassword
    });
    fs.writeFileSync(filePath, JSON.stringify(data));
}