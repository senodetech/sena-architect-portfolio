const express = require("express");
const http = require("http");
const WebSocket = require("ws");

const app = express();

const server = http.createServer(app);

const wss = new WebSocket.Server({ 
    server
});

wss.on("connection", (socket) => {

    console.log("A new client connected!");

});

app.get("/", (req, res) => {
    res.send("Day 1 - Architect Journey");
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Listening started on port ${PORT}`)
});