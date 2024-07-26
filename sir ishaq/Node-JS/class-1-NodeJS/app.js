// console.log("Hello World");

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("Hello World");
        res.end();
    } else if (req.url === "/form") {
        res.setHeader("Content-Type", "text/html");
        res.write("<form action='/submit' method='POST'> <input type='text' name='data' /> <input type='text' name='data2' /> <button>Submit</button> </form>");
        res.end();
    } else if (req.url === "/submit") {
        let data = "";
        req.on("data", chunk => data += chunk);
        req.on("end", () => {
            console.log(data);
            res.write("Data Recieved");
            res.end();
        });
    } else {
        res.write("404 page is not found");
        res.end();
    }
});
server.listen(3000);
