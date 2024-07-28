const express = require("express");
const app = express();

app.use((req, res, next) => {   //  AUTH MIDDLEWARE 
    req.data = "Sheroz";
    next();
});

app.use((req, res, next) => {
    res.send(req.data);
});

app.listen(3000);