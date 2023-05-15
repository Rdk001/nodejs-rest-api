const HttpError = require("../helpers/HttpError");

const validateBody = (schema) => {
  const fn = (req, res, next) => {
    const keys = Object.keys(req.body);
    if (!keys.length) {
      next(HttpError(400, "Missing fields"));
    }
    const { error } = schema.validate(req.body);
    if (error) {
      next(
        HttpError(
          400,
          `missing required ${error.message
            .split(" ")[0]
            .replace(/"/g, "")} field`
        )
      );
    }
    next();
  };
  return fn;
};

module.exports = validateBody;
