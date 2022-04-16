module.exports = {
  databaseUri: process.env.DATABASE_URI || 'mongodb://localhost/poll-app',
  port: process.env.PORT || 4000,
  redisConnectionUri: process.env.REDIS_CONNECTION_URI,
};
