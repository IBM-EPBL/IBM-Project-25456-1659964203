const mongoose = require("mongoose");

const schema = mongoose.schema;

const train = new mongoose.Schema({
  name: { type: String, required: true },
  _id: { type: String, required: true },
  location: { type: String, required: true },
});

const Train = mongoose.model("locationDB", train);

module.exports = Train;
