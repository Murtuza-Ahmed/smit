import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "products.json");  // currentWorkingDirectry

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