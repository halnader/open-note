const express = require('express');
const mongoose = require('mongoose');
const Class = mongoose.model('Class');
const User = mongoose.model('User');

module.exports = app => {
  app.post('/api/:ClassName', function(req, res) {
    var ClassName = req.body.Class
    var University = req.body.University
    var NewClass = {ClassName, University}
    Class.findOne({ClassName: req.params.ClassName}, function(err, foundClass){
      if(err) {
        console.log(err)
      } else if(foundClass) {
        User.findById(req.user._id, function(err, foundUser){
            if(err) {
              console.log(err)
            } else {
              foundUser.classes.push(foundClass._id);
              foundUser.save()
            }
    })
      } else {
        new Class(NewClass).save().then(newclass => {
          User.findById(req.user._id, function(err, foundUser) {
            if(err) {
              console.log(err);
            } else {
              foundUser.classes.push(newclass._id);
              foundUser.save();
            }
          })

      }
        })
      }
    })
  });

  app.get('/api/:class_id', function(req,res) {
    Class.findById(req.params.class_id, function(err, foundClass) {
      if(err) {
        console.log(err);
      } else {
        res.send(foundClass);
      }
    })
  });
}
