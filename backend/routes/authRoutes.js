const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../model/userModel'); // Require your user model

const router = express.Router();

// Replace with your Google Cloud Platform credentials
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    // Find user by ID from your database
    User.findById(id)
        .then(user => done(null, user))
        .catch(err => done(err));
});

// Configure Google OAuth strategy
passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: '/auth/google/callback'
},
// Google OAuth verification callback function
(accessToken, refreshToken, profile, done) => {
  // Implement logic to find or create user in your database based on profile information
  // This is a placeholder, replace with your user model interaction logic
  User.findOne({ googleId: profile.id })
    .then(existingUser => {
      if (existingUser) {
        done(null, existingUser);
      } else {
        // Create a new user
        new User({
          googleId: profile.id,
          displayName: profile.displayName,
          email: profile.emails[0].value
        })
        .save()
        .then(user => done(null, user));
      }
    })
    .catch(err => done(err, null));
}
));

// Route to initiate Google OAuth login
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Google OAuth redirect callback route
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    // Successful login, redirect to your application or send relevant response
    res.redirect('/communication');  // Replace with your desired redirect URL
  }
);

router.post('/logout', (req, res) => {
  req.logout(); // Use Passport's logout method
  res.redirect('/'); // Redirect to your desired logout page or home page
});

module.exports = router;
