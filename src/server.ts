const express = require('express');
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const userRoutes = require('./routes/user');

dotenv.config({
  path: path.resolve(process.cwd(), process.env.NODE_ENV === "development" ? '.env.development' : '.env'),
});

async function main(): Promise<void> {
  const app = await createApp();
  const port = process.env.PORT || 4200;

  app.listen(port);
  console.log(`Listening on port http://localhost:${port}`);
}

async function createApp() {
  const app = express();
  app.use(express.json());

  console.log("Connecting to database...");
  await mongoose.connect(`${process.env.MONGODB_SERVER_URL}`);
  console.log("Connected to database");

  // link routes
  app.use('/user', userRoutes);

  return app;
}
main();