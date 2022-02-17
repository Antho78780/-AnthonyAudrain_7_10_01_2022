const http = require("http");
require("dotenv").config();

const PORT2 = process.env.PORT;

const app = require("./app");

app.set("port", PORT2);


const server = http.createServer(app);

server.listen(PORT2);