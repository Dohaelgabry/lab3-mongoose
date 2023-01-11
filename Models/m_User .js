const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: { typeof: String, required: true, unique: true },
  password: { typeof: String, required: true },
  firstName: { typeof: String, required: true, min: [3], max: [15] },
  age: { typeof: Number, min: [13] },
});

const User = mongoose.model("users", userSchema);

module.exports = User;
