const http = require("http");

const PORT = 3000;

const app = require("./app");

app.set("port", PORT);


const server = http.createServer(app);

server.listen(PORT);