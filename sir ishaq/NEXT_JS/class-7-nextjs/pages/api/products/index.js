import { getAll, save } from "@/services/products";


// const products = []

export default function handler(req, res) {
    if (req.method === "GET") {
        const products = getAll()
        return res.status(200).json(products);
    } else if (req.method === "POST") {
        const { title, description, prices } = req.body;
        save(title, description, prices);
        return res.status(201).json({});
    }
    return res.status(404).send();
}