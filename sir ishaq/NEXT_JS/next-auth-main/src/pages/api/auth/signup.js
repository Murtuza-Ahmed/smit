export default function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(404).send();
    }
}
