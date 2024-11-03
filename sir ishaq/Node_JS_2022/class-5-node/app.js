const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
var session = require('express-session')
const authRoutes = require("./routes/auth.js")
const productsRoute = require("./routes/products.js");
const apiRouter = require("./routes/api.js")

// console.log(process.env.SECRET)
app.use(session({
    secret: process.env.SECRET,  // secret key Environment  variable, (Environment  variable save in package json file script)

    resave: false,
    saveUninitialized: false
}))

app.use((req, res, next) => {
    res.set({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "DELETE,GET,POST,PATCH",
        "Access-Control-Allow-Headers": "Content-type, Authorization"
    })
    if (req.method === "OPTIONS") {
        return res.status(200).json({ message: "ok" });
    } else {
        next()
    }
})


app.use(bodyParser.urlencoded({ // x-www-form-urlencoded
    extended: false
}));

app.use(bodyParser.json()) // application/json

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", "views");

app.use((req, res, next) => {   // MIDDLE-WERE
    console.log(req.url);
    next();
});

app.use("/auth", authRoutes)
app.use("/product", productsRoute);

app.use("/api", apiRouter)

app.use("/", (req, res) => {
    res.render("home", { user: "Sheroz" });
});
app.listen(3000);