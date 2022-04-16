const BodyParser = require('body-parser');

var cors = require('cors');

module.exports = (app) => {
  app.use(BodyParser.json());

  app.use(cors());
};
