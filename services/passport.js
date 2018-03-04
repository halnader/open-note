const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const mongoose = require('mongoose');
const config = require('../config/keys');

const User = mongoose.model('User');

passport.serializeUser((user,done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
  .then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy({
    clientID: config.googleclientID,
    clientSecret: config.googleclientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
  }, (accessToken, refreshToken, profile, done) => {
    process.nextTick(function() {
      User.findOne({googleId: profile.id}).then(existingUser => {
        if(existingUser) {
          return done(null, existingUser);
        } else {
          new User({googleId: profile.id, displayName: profile.displayName, email: profile.emails[0].value, profilePicture: profile._json.picture})
            .save()
            .then(user => done(null, user));
        }
      });
    });
  }
));

passport.use(
  new FacebookStrategy({
    clientID: config.facebookclientID,
    clientSecret: config.facebookclientSecret,
    callbackURL: '/auth/facebook/callback',
    profileFields: ['id', 'displayName', 'picture.type(large)', 'email'],
    proxy: true
  }, (accessToken, refreshToken, profile, done) => {
      User.findOne({facebook: profile.id}).then(existingUser => {
        if(existingUser) {
          return done(null, existingUser);
        } else {
          new User({facebookId: profile.id, displayName: profile.displayName, email: profile.email, profilePicture: profile.photos ? profile.photos[0].value : '/img/faces/unknown-user-pic.jpg'})
            .save()
            .then(user => done(null, user));
        }
      });
    }
  )
);
