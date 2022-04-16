const { promisify } = require('util');

module.exports = (db, redisDb) => {
  const saddAsync = promisify(redisDb.sadd).bind(redisDb);
  const sisMemberAsync = promisify(redisDb.sismember).bind(redisDb);

  return async (req, res) => {
    const isMember = await sisMemberAsync(req.params.poll, req.body.ip);

    if (isMember) {
      return res.status(400).json({
        message: 'You have already voted for this poll.',
      });
    }

    const result = await db.collection('polls').updateOne(
      {
        _id: req.params.poll,
        'choices._id': req.body.choice,
      },
      {
        $inc: {
          'choices.$.count': 1,
        },
      }
    );

    await saddAsync(req.params.poll, req.body.ip);

    return res.json({
      message: 'Vote has been registered.',
    });
  };
};
