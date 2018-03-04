const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports = app => {
  app.get('/auth/facebook', passport.authenticate('facebook'));

  app.get('/auth/facebook/callback', passport.authenticate('facebook'), (req,res) => {
    if(req.user) {
      res.redirect('/');
    } else {
      res.redirect('/register');
    }
  });

  app.get('/auth/google', passport.authenticate('google', {scope: ['profile', 'email']}));

  app.get('/auth/google/callback', passport.authenticate('google'), (req,res) => {
    if(req.user) {
      res.redirect('/');
    } else {
      res.redirect('/register');
    }
  });

  app.get('/api/user', (req, res) => {
    if(req.user) {
      User.findById(req.user._id).populate("saved").populate("lessons").populate("reviews").exec(function(err, foundUser) {
        if(err) {
          console.log(err);
        } else {
          res.send(foundUser);
        }
      });
    } else {
      res.send(null);
    }
  });

  app.get('/api/logout', (req,res) => {
    req.logout();
    res.redirect('/');
  });
};
