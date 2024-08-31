const express = require("express");
const app = express();  //  application run hogi app me
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const form = require("./routes/form");
const todo = require("./routes/todo");
const auth = require("./routes/auth");
const products = require("./routes/products");
const { vrify } = require("./middlewere/auth");
// const router = require("./routes/auth");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
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
app.use("/products", products);

app.listen(8000);