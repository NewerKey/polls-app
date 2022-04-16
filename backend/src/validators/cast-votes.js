const { validateAll } = require('indicative/validator');

module.exports = async (req, res, next) => {
  try {
    await validateAll(req.body, {
      choice: 'required',
      ip: 'required|ipv4',
    });

    return next();
  } catch (errors) {
    return res.status(422).json(errors);
  }
};
