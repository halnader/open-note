const mongoose = require('mongoose');

const ClassSchema = new mongoose.Schema({
  className:  String,
  university: String,
});

mongoose.model("Class", ClassSchema);
