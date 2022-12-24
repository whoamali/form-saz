const { User, Form } = require("./../models");
const { tokenValidation } = require("./../utils");

exports.getForm = async (req, res) => {
  const errors = [];

  try {
    const jwtValidation = tokenValidation(req.headers["x-access-token"]);
    if (jwtValidation.userId !== null) {
      const user = await User.findById(jwtValidation.userId);
      if (user) {
        let forms = {};
        if (req.query.path === "/dashboard") {
          forms = await Form.find({}).limit(4).sort({
            createdAt: "desc",
          });
          return res.status(200).json({
            status: "success",
            statusCode: 200,
            errors: null,
            forms,
          });
        }
      } else {
        return res.status(400).json({
          status: "error",
          statusCode: 400,
          errors: ["کاربر مورد نظر یافت نشد!"],
        });
      }
    } else {
      return res.status(400).json({
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
