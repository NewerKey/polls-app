const Express = require('express');

const setupRouter = require('./setup/router');

const setupMiddleware = require('./setup/middleware');

const setupDatabase = require('./setup/database');

//Create express instance
const app = Express();

setupMiddleware(app);

setupRouter(app);

setupDatabase()
  .then((client) => {
    app.listen(4000, () => {
      console.log('Server started on port 4000');
    });
  })
  .catch(console.error);
