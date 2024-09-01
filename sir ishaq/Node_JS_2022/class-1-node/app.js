const http = require("http");

const server = http.createServer((req, res) => {
    // console.log(req.url);
    if (req.url === "/") {
        res.write("Hello");
        res.write("World");
        res.end();
    } else if (req.url === "/form") {
        res.setHeader("Content-Type", "text/html")
        res.write("<form action='/submit' method='POST'><input name='data' /><button>Submit</button></form>");
        res.end();
    } else if (req.url === "/submit") {
        res.write("Data Received");
        res.end();
    }
});

server.listen(3000);