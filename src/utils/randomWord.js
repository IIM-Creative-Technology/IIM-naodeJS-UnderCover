const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });

server.listen(3000, () => {
  console.log('listening on *:3000');
});

// Random word generation 

var randomWords = require('random-words');

const randomWord = randomWords(); // generate a random word
console.log('The randomWord is ' + randomWord)

const datamuse = require('datamuse');
let undercoverWord = datamuse.request('words?rel_trg=' + randomWord)
.then((json) => {
  console.log(json[json.length - 1]['word']);
});

