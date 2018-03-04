const mongoose = require('mongoose');

const DocumentSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User";
  },
  rating: Number,
  name: String,
  file: String
});
