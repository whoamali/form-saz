const jwt = require("jsonwebtoken");

const tokenValidation = (token) => {
  let res = {};
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (decoded) {
      res = { userId: decoded.userId, errors: null };
    }
  } catch (err) {
    res = { userId: null, errors: [{ name: "jwt", message: err.message }] };
    console.log(err);
  }
  return res;
};

module.exports = tokenValidation;
