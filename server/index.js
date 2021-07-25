const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 5000;
const router = require('./router');
const app = express();
const server = http.createServer(app);
corsOptions = {
  cors: true,
  origins: ['http://localhost:3000'],
};

const io = socketio(server, corsOptions);

io.on('connection', (socket) => {
  console.log('We have a new connection');

  socket.on('join', ({ name, room }) => {
    console.log(name, room);
  });

  socket.on('disconnect', () => {
    console.log('user had left');
  });
});

app.use(router);

server.listen(PORT, () => {
  console.log(`server has started on port ${PORT}`);
});
