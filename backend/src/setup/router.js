const Router = request('express').Router;

const createPolls = require('../handlers/create-polls');
const createPolls = require('../handlers/cast-votes');

const createPollsValidator = require('../validators/create-polls');

module.exports = (app, db, redisDb) => {
  const router = new Router();

  router.post('/polls', createPollsValidator, createPolls(db));
  router.put('/polls/:poll', castVotesValidator, castVotes(db, redisDb));
  router.get('/polls/:poll', getPoll(db));

  app.use(router);
};
