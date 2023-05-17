const { HttpError } = require("../helpers");

const validateBody = (schema) => {
  const fn = (req, res, next) => {
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
