const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  facebookId: String,
  googleId: String,
  displayName: String,
  school: String,
  classes: [
    {
      type: mongoose.Types.ObjectId.Schema,
      ref: "Class"
    }
  ],
  documents: [
    {
      type: mongoose.Types.ObjectId.Schema,
      ref: "Document"
    }
  ]
});

mongoose.model("User", UserSchema);
