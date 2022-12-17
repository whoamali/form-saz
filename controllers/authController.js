const { User } = require("./../models");
const { tokenValidation } = require("./../utils");

module.exports = async (req, res) => {
  const errors = [];

  try {
    const jwtValidation = tokenValidation(req.body.token);
    if (jwtValidation.userId !== null) {
      const user = await User.findById(jwtValidation.userId);
      res.status(200).json({
        status: "success",
        statusCode: 200,
        errors: null,
        user: { ...user._doc, password: undefined },
      });
    } else {
      return res
        .status(400)
        .json({
          status: "error",
          statusCode: 400,
          errors: jwtValidation.errors,
        });
    }
  } catch (err) {
    console.log(err);
    err.inner.forEach((e) => {
      errors.push({
        name: e.path,
        message: e.message,
      });
    });
    return res.status(400).json({ status: "error", statusCode: 400, errors });
  }
};
