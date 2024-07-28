const express = require("express");
const router = express.Router();

router.get("/", (req, res) => { //  ROUTER ESA BANE GA /form/
    res.send(`
        <form action="/form/submit" method="POST">
        <input type="text" name="data"/>
        <button>Submit</button>
        </form>
        `);
});

router.post("/submit", (req, res) => { 
    res.send(`Submitted`);
});

module.exports = router;