const express = require("express");
const router = express.Router();
const path = require("path");

router.post("/", (req, res, next) => {
    res.send(req.body);
});

router.get("/", (req, res, next) => {   // MIDDLE-WERE
    res.sendFile(path.join(__dirname, "../", "views", "form.html"));
});

module.exports = router;