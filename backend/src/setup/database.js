const Mongodb = require('mongodb');

//Connection string
const uri = 'mongodb://localhost/poll-app';

module.exports = () => {
  const client = new Mongodb.MongoClient(uri, { useUnifiedTopology: true });

  return client.connect(); //establish connection and return a promise
};
