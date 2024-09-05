const express = require("express");
const app = express();
const fromRoute = require("./routes/form.js");

app.use((req, res, next) => {   // MIDDLE-WERE
    console.log(req.url);
    next();
});

app.use("/form", fromRoute);
app.use("/", (req, res) => {
    res.send("Welcome to Express App");
});
app.listen(3000);