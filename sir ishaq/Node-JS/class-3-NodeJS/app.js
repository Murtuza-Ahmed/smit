const express = require("express");
const form = require("./routes/form");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();  //  application run hogi app me

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(process.cwd(), "public")));

app.use((req, res, next) => {   //  AUTH MIDDLEWARE 
    req.data = "Sheroz";
    next();
});

app.use("/form", form);

app.listen(3000);