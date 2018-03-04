const express = require('express');
const mongoose = require('mongoose');
const Class = mongoose.model('Class');
const User = mongoose.model('User');

module.exports = app => {
  app.post('/api/:ClassName', func(req, res) {
    var ClassName = req.body.Class
    var University = req.body.University
    var NewClass = {ClassName, University}
    Class.findOne({ClassName: req.params.ClassName}, func(err, foundClass){
      if(err) {
        console.log(err)
      } else if(foundClass) {
        User.findById(req.user._id, func(err, foundUser){
            if(err) {
              console.log(err)
            } else {
              foundUser.classes.push(foundClass._id);
              foundUser.save()
            }
    })
      } else {
        new Class(NewClass).save().then(newclass => {
          User.findById(req.user._id, func(err, foundUser) {
            if(err) {
              console.log(err);
            } else {
              foundUser.classes.push(newclass._id);
              found.save();
            }
          })

      }
        })
      }
    })
  })
}
