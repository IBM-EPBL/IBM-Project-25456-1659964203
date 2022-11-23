const mongoose = require("mongoose");

const schema = mongoose.schema;

const user = new mongoose.Schema({
  name: { type: String, required: true },
  _id: { type: String, required: true },
  password: { type: String, required: true },
  balance: { type: Number, required: true },
});

const User = mongoose.model("userDB", user);

module.exports = User;
