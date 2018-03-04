const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  facebookId: String,
  googleId: String,
  displayName: String,
  school: String,
  classes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Class"
    }
  ],
  documents: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Document"
    }
  ]
});

mongoose.model("User", UserSchema);
