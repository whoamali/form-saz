const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

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
      this.password = await bcrypt.hash(this.password, 10);
    }
    next();
  } catch (err) {
    next(err);
  }
});

module.exports = model("User", userSchema);
