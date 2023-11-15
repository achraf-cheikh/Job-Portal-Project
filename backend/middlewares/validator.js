const { check, validationResult } = require("express-validator");

//register rules user
exports.registerRules = () => [
  check("firstName", "this field is required").notEmpty(),
  check("lastName", "this field is required").notEmpty(),
  check("email", "this field is required").notEmpty(),
  check("email", "this must be a valid email").isEmail(),
  check("password", "this field is required").isLength({ min: 6 }),
];

// register rules admin
exports.adminRules = () => [
  check("email", "this field is required").notEmpty(),
  check("email", "this must be a valid email").isEmail(),
  check("password", "this field is required").isLength({ min: 6 }),
];

exports.validator = (req, res, next) => {
  const errors = validationResult(req);
  errors.isEmpty() ? next() : res.status(406).json({ errors: errors.array() });
};
