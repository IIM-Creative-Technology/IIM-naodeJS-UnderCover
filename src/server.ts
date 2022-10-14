const express = require('express');
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const userRoutes = require('./routes/user');

const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

dotenv.config({
  path: path.resolve(process.cwd(), process.env.NODE_ENV === "development" ? '.env.development' : '.env'),
});

async function main() {
  const app = await createApp();
  const port = process.env.PORT || 4200;
  const serveur = await createSocket();

  server.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`);
  });
}

async function createSocket() {
  app.get('/game', (req: any, res: any) => {
    res.sendFile(path.resolve(process.cwd(), 'public', 'game.html'));
  })

  io.on('connection', (socket: any) => {
    console.log('un utilisater s\'est connecté ')

    socket.on('disconnect', () => {
      console.log('Un utilisateur s\'est déconnecté.');
    });

    socket.on('chat message', (msg: any) => {
      io.emit('chat message', msg);
    });

  });

}

async function createApp() {
  const app = express();
  app.use(express.json());

  console.log("Connecting to database...");
  await mongoose.connect(`${process.env.MONGODB_SERVER_URL}`);
  console.log("Connected to database");

  // link routes
  app.use('/user', userRoutes);

  // render the index.html file
  app.get('/', (req: any, res: any) => {
    res.sendFile(path.resolve(process.cwd(), 'public', 'index.html'));
  });

  // retune the game.html file
  app.get('/game', (req: any, res: any) => {
    res.sendFile(path.resolve(process.cwd(), 'public', 'game.html'));
  });

  return app;
}


main();



