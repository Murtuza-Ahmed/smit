const express = require("express");
const path = require("path");
const router = express.Router();

// router.get("/", (req, res) => { //  ROUTER ESA BANE GA /form/
//     res.send(`
//         <form action="/form/submit" method="POST">
//         <input type="text" name="data"/>
//         <button>Submit</button>
//         </form>
//         `);
// });

router.get("/", (req, res) => { //  ROUTER ESA BANE GA /form/
    res.sendFile(path.join(process.cwd(), "views", "form.html"));
});

router.post("/submit", (req, res) => {
    res.send(req.body);
});

module.exports = router;