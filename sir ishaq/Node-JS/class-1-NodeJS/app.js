// console.log("Hello World");

const http = require("http");
const fs = require("fs");
const path = require("path");

const filePath = path.join(process.cwd(), "data.txt");

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
            fs.readFile(filePath, "utf8", (_, fileData) => {
                const newData = fileData + "\n" + data;
                fs.writeFile(filePath, newData, () => {
                    res.write("Data Recieved");
                    res.end();
                });
            });
            // console.log(data);
        });
    } else {
        res.write("404 page is not found");
        res.end();
    }
});
server.listen(3000);
