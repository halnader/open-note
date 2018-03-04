const mongoose = require('mongoose');

const DocumentSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId
  }
});
