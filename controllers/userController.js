const bcrypt = require("bcryptjs");

const { User } = require("./../models");
const { tokenValidation, hashPassword } = require("./../utils");

exports.getName = async (req, res) => {
  const errors = [];

  try {
    const jwtValidation = tokenValidation(req.headers["x-access-token"]);
    if (jwtValidation.userId !== null) {
      const user = await User.findById(jwtValidation.userId);
      if (user) {
        return res.status(200).json({
          status: "success",
          statusCode: 200,
          errors: null,
          name: user.name,
        });
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

exports.changeName = async (req, res) => {
  const errors = [];

  try {
    const jwtValidation = tokenValidation(req.headers["x-access-token"]);
    if (jwtValidation.userId !== null) {
      const user = await User.findById(jwtValidation.userId);
      if (user && req.body.name) {
        user.name = req.body.name;
        user.save();
        return res.status(200).json({
          status: "success",
          statusCode: 200,
          errors: null,
        });
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

exports.changePassword = async (req, res) => {
  const errors = [];

  try {
    const jwtValidation = tokenValidation(req.headers["x-access-token"]);
    if (jwtValidation.userId !== null) {
      const user = await User.findById(jwtValidation.userId);
      if (user) {
        if (
          req.body.password &&
          req.body.newPassword &&
          req.body.newPasswordRepeat
        ) {
          if (req.body.newPassword == req.body.newPasswordRepeat) {
            console.log(typeof req.body.newPassword);
            const hashedPassword = await hashPassword(req.body.newPassword) //! Hash
            console.log("req.body.password", req.body);
            console.log("user.password", user.password);
            bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
              if (err) {
                console.log(err);
                return res.status(400).json({
                  status: "error",
                  statusCode: 400,
                  errors: [
                    {
                      name: "bcrypt",
                      message: "خطایی از سمت سرور رخ داده است!",
                    },
                  ],
                });
              }
              if (isMatch) {
                if (hashedPassword) {
                  console.log("hashedPassword", hashedPassword);
                  user.password = hashedPassword;
                  user.save();
                  return res.status(200).json({
                    status: "success",
                    statusCode: 200,
                    errors: null,
                  });
                } else {
                  console.log(err);
                  return res.status(400).json({
                    status: "error",
                    statusCode: 400,
                    errors: [
                      {
                        name: "bcrypt",
                        message: "خطایی از سمت سرور رخ داده است!",
                      },
                    ],
                  });
                }
              } else {
                return res.status(400).json({
                  status: "error",
                  statusCode: 400,
                  errors: [
                    {
                      name: "password",
                      message: "کلمه عبور ارسالی با کلمه عبور اصلی یکسان نیست!",
                    },
                  ],
                });
              }
            });
          } else {
            return res.status(400).json({
              status: "error",
              statusCode: 400,
              errors: [
                {
                  name: "newPassword",
                  message: "کلمه عبور جدید و تکرار آن یکسان نیستند!",
                },
              ],
            });
          }
        }
      } else {
        return res.status(400).json({
          status: "error",
          statusCode: 400,
          errors: [{ name: "user", message: "کاربر مورد نظر یافت نشد!" }],
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
