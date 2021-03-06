const Express = require('express');

const Config = require('./config');

const setupRedis = require('./setup/redis');

const setupRouter = require('./setup/router');

const setupMiddleware = require('./setup/middleware');

const setupDatabase = require('./setup/database');

//Create express instance
const app = Express();

setupMiddleware(app);

async function start() {
  const db = await setupDatabase();

  const redisDb = await setupRedis();
  setupRouter(app, db, redisDb);
  app.listen(Config.port, () => {
    console.log('Server started on port', Config.port);
  });
}

start().catch(console.error);
