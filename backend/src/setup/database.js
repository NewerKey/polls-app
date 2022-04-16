const Mongodb = require('mongodb');

//Connection string
const uri = 'mongodb://localhost/poll-app';

module.exports = async () => {
  const client = new Mongodb.MongoClient(uri, { useUnifiedTopology: true });

  await client.connect(); //establish connection and return a promise

  return client.db();
};
