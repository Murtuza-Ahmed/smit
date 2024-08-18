const express = require("express");
const form = require("./routes/form");
const todo = require("./routes/todo");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();  //  application run hogi app me
const auth = require("./routes/auth");
const { vrify } = require("./middlewere/auth");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(process.cwd(), "public")));

app.set("view engine", "ejs");
app.set("views", "views");

app.use((req, res, next) => {   //  AUTH MIDDLEWARE 
    req.data = "Sheroz";
    next();
});

app.use("/auth", auth);
app.use("/todo", vrify, todo);
app.use("/form", form);

app.listen(3000);