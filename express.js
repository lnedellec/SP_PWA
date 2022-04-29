const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
    socket.on('nouveauMessage', (lprenom, lmessage) => {
        io.emit('nouveauMessage', lprenom, lmessage);
    })
});

server.listen(8100, () => {
    console.log('listenning on port 8100');
})