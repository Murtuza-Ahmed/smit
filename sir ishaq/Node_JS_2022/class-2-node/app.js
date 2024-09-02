const express = require("express");
const app = express();

app.use((req, res, next) => {   // MIDDLE-WERE
    console.log(req.url);
    next();
});

app.post("/form", (req, res, next) => {
    res.send(req.url + "check");
});

app.use("/", (req, res, next) => {   // MIDDLE-WERE
    res.send(`
        <form action="/form" method="POST"> 
            <input name="data"/> 
            <button>Submit</button> 
        </form>
    `);
});

app.listen(3000);