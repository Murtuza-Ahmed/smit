const express = require("express");
const app = express();

const form = require("./routes/form");

app.use((req, res, next) => {   //  AUTH MIDDLEWARE 
    req.data = "Sheroz";
    next();
});

app.use("/form", form);

app.listen(3000);