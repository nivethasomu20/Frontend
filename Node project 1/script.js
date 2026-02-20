const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {

    if (req.method === "GET" && req.url === "/") {
        fs.readFile("index.html", (err, data) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
    }

    else if (req.method === "GET" && req.url === "/style.css") {
        fs.readFile("style.css", (err, data) => {
            res.writeHead(200, { "Content-Type": "text/css" });
            res.end(data);
        });
    }

    else if (req.method === "POST" && req.url === "/login") {

        let body = "";

        req.on("data", chunk => {
            body += chunk.toString();
        });

        req.on("end", () => {
            const params = new URLSearchParams(body);
            const username = params.get("username");
            const password = params.get("password");

            res.writeHead(200, { "Content-Type": "text/html" });

            if (username === "admin" && password === "1234") {
                res.end("<h1 style='color:green;'>Login Successful</h1>");
            } else {
                res.end("<h1 style='color:red;'>Invalid Credentials</h1>");
            }
        });
    }

    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Page Not Found");
    }
});

server.listen(4000, () => {
    console.log("Server running at http://localhost:4000");
});