const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
var session = require('express-session')
const authRoutes = require("./routes/auth.js")
const productsRoute = require("./routes/products.js");


app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}))


app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", "views");

app.use((req, res, next) => {   // MIDDLE-WERE
    console.log(req.url);
    next();
});

app.use("/auth", authRoutes)
app.use("/product", productsRoute);
app.use("/", (req, res) => {
    res.render("home", { user: "Sheroz" });
});
app.listen(3000);