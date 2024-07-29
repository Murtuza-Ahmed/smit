const { name } = require("ejs");
const express = require("express");
const path = require("path");
const router = express.Router();

// router.get("/", (req, res) => { //  ROUTER ESA BANE GA /form/
//     res.sendFile(path.join(process.cwd(), "views", "form.html"));
// });

router.get("/", (req, res) => { //  ROUTER ESA BANE GA /form/
    res.render("form", { users: req.query.name || "User" }); //  template
});

router.post("/submit", (req, res) => {
    res.send(req.body);
});

module.exports = router;