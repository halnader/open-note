const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const path = require('path');
const passport = require('passport');
const config = require('./config/keys.js');
const multer = require('multer');
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');

require('./models/user_model');
require('./models/document_model');
require('./models/class_model');
require('./services/passport');

User = mongoose.model('User');
Documents = mongoose.model('Documents');

mongoose.Promise = global.Promise;

AWS.config.update({
accessKeyId: "AKIAIVGB7E6DICG2MVOA",
secretAccessKey: "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",
"region": "us-east-2"
});

var s3 = new AWS.S3();

const profileBucket = 'opennotes';
const myKey = 'opennotes';
s3.createBucket({ Bucket: profileBucket }, (err, data) => {
   if (err) {
     console.log(err);
   } else {
     params = { Bucket: profileBucket, Key: myKey, Body: 'Test' };
     s3.putObject(params, (err, data) => {
       if (err) {
         console.log(err);
       } else {
         console.log('Successfully loaded data');
       }
     });
   }
 });

mongoose.connect(config.mongoURI);

const app = express();

app.use(bodyParser.json());
app.use(cookieSession({
  keys: [config.secret],
  maxAge: 24*60*60*1000*7
}));

app.use(passport.initialize());
app.use(passport.session());

var upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'opennotes',
    acl: 'public-read',
    metadata: function(req,file,cb) {
      cb(null, {fieldName: file.fieldname});
    },
    key: function(req,file,cb) {
      cb(null, Date.now().toString());
    }
  })
});

app.post('/api/noteupload', upload.single('notes'), (req,res) => {
  const notes = req.user.notes || req.file.location;
  Documents.create({file: notes, name: req.body.name, author: req.user._id}, function(err) {
    if(err) {
      res.redirect("/dashboard");
    } else {
      res.redirect("/dashboard");
    }
  })
});

var myPythonScriptPath = 'D:\\hashem\\My_Projects\\StarterHacks\\python\\main.py';

// Use python shell
var PythonShell = require('python-shell');
var pyshell = new PythonShell(myPythonScriptPath);
pyshell.end(function (err) {
    if (err){
        throw err;
    };
});

require('./routes/authRoutes')(app);


if(process.env.NODE_ENV == 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 3001;

app.listen(PORT, function() {
  console.log('Server running on port: ' + PORT);
});
