const { v4 } = require('uuid');

module.exports = (db) => {
  return async (req, res) => {
    const data = {
      _id: v4(),
      title: req.body.title,
      choices: req.body.choices.map((choice) => ({
        name: choice,
        count: 0,
        _id: v4(),
      })),
    };

    await db.collection('polls').insertOne(data);

    return res.json({
      message: 'Poll created.',
      pollId: data._id,
    });
  };
};
