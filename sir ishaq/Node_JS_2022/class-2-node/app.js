const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fromRoute = require("./routes/form.js");

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use((req, res, next) => {   // MIDDLE-WERE
    console.log(req.url);
    next();
});

app.use("/form", fromRoute);
app.use("/", (req, res) => {
    res.send("Welcome to Express App");
});
app.listen(3000);