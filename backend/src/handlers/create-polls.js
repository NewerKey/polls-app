module.exports = (client) => {
  return (req, res) => {
    console.log(client);
    res.json({
      message: 'You created a new poll.',
    });
  };
};
