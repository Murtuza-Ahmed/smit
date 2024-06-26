import { getAll } from "@/services/products";


// const products = []

export default function handler(req, res) {
    if (req.method === "GET") {
        const products = getAll()
        return res.status(200).json(products);
    }
    return res.status(404).send();
}