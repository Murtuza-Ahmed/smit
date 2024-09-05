const express = require("express");
const router = express.Router();

router.post("/", (req, res, next) => {
    res.send(req.body);
});

router.get("/", (req, res, next) => {   // MIDDLE-WERE
    res.send(`
        <form action="/form" method="POST"> 
            <input name="data" />
            <button>Submit</button> 
        </form>
    `);
});

module.exports = router;