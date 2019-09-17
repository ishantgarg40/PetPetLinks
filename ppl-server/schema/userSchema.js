const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: String,
  email: {
    type: String,
    required: true,
    unique: true
  },
  firstname: String,
  lastname: String,
  isVerified: Boolean
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("userModel", userSchema);
