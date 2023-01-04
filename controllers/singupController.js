const { User } = require("./../models");
const { userValidation } = require("./../utils");
const { registeredMail } = require("./../configs/email");

module.exports = async (req, res) => {
  const errors = [];

  try {
    await userValidation.validate(req.body, { abortEarly: false });
    const { email, username } = req.body;
    const emailUnique = await User.findOne({ email });
    const usernameUnique = await User.findOne({ username });
    if (emailUnique || usernameUnique) {
      errors.push({
        name: "email",
        message: "ایمیل یا نام کاربری از قبل در سایت موجود است",
      });
      return res.status(400).json({ status: "error", statusCode: 400, errors });
    }
    const user = await User.create({ ...req.body });
    if (user) {
      await registeredMail(email, username);
      res.status(201).json({
        status: "success",
        statusCode: 201,
        errors: null,
      });
    }
  } catch (error) {
    console.log(error);
    error.inner.forEach((e) => {
      errors.push({
        name: e.path,
        message: e.message,
      });
    });
    return res.status(400).json({ status: "error", statusCode: 400, errors });
  }
};
