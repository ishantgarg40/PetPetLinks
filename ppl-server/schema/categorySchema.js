const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");

const categorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  filedata: Object
});

categorySchema.plugin(validator);

module.exports = mongoose.model("categoryModel", categorySchema);
