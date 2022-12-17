const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const { User } = require("./../models");

module.exports = async (req, res) => {
  const errors = [];

  try {
    const { username, password, rememberMe } = req.body;
    let user = await User.findOne({ username });
    if (user == null) {
      user = await User.findOne({ email: username });
      if (!user) {
        errors.push({
          name: "email",
          message: "کاربر با این نام کاربری یا ایمیل در سایت موجود نمیباشد!",
        });
        return res
          .status(400)
          .json({ status: "error", statusCode: 400, errors });
      }
    }
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        errors.push({
          name: "password",
          message: err.message,
        });
        return res
          .status(400)
          .json({ status: "error", statusCode: 400, errors });
      }
      if (isMatch) {
        let jwtSecretKey = process.env.JWT_SECRET_KEY;
        let data = {
          time: Date(),
          userId: user.id,
        };
        const token = jwt.sign(data, jwtSecretKey, { expiresIn: `${rememberMe ? "10d" : "2h"}` });
        res.status(200).json({
          status: "success",
          statusCode: 200,
          errors: null,
          user: { ...user._doc, token, password: undefined },
        });
      } else {
        errors.push({
          name: "password",
          message: "نام کاربری/ایمیل یا کلمه عبور اشتباه است!",
        });
        return res
          .status(400)
          .json({ status: "error", statusCode: 400, errors });
      }
    });
  } catch (err) {
    console.log(err);
    error.inner.forEach((e) => {
      errors.push({
        name: e.path,
        message: e.message,
      });
    });
    return res.status(400).json({ status: "error", statusCode: 400, errors });
  }
};
