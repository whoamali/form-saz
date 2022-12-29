const { Schema, model } = require("mongoose");

const { hashPassword } = require("./../utils");

const userSchema = new Schema({
  name: {
    type: String,
  },
  username: {
    type: String,
    require: true,
    unique: true,
    minLength: 4,
    maxLength: 128,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    minLength: 4,
    maxLength: 128,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  token: { type: String },
});

userSchema.pre("save", async function (next) {
  try {
    if (this.isModified("password")) {
      this.password = await hashPassword(this.password);
    }
    next();
  } catch (err) {
    next(err);
  }
});

module.exports = model("User", userSchema);
