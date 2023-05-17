const { HttpError } = require("../helpers");

const validateEmptyBody = (message) => {
  const fn = (req, res, next) => {
    const keys = Object.keys(req.body);
    if (!keys.length) {
      next(HttpError(400, message));
    }
    next();
  };
  return fn;
};

module.exports = validateEmptyBody;
