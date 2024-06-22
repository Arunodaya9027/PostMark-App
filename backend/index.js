const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const dotenv = require('dotenv');
const connect = require('./db/db.js');
const cors = require('cors');
const session = require('express-session');

dotenv.config();

const app = express();
connect();

// Cors middleware
app.use(cors());

// Body parser middleware
app.use(express.json());

app.use(session({
  secret: 'mod458go', // Replace with a strong, unique secret
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set to true for production (HTTPS)
}));

// Passport configuration
app.use(passport.initialize());
app.use(passport.session());

const authRoutes = require('./routes/authRoutes.js');
const communicationRoutes = require('./routes/communicationRoutes.js');

app.use('/auth', authRoutes);
app.use('/api/comm', communicationRoutes);

// passport.use(new GoogleStrategy({
//   clientID: process.env.GOOGLE_CLIENT_ID,
//   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//   callbackURL: '/auth/google/callback'
// },
// // Google OAuth verification callback function
// (accessToken, refreshToken, profile, done) => {
//   // Implement logic to find or create user in your database based on profile information
//   User.findOne({ googleId: profile.id })
//     .then(existingUser => {
//       if (existingUser) {
//         done(null, existingUser);
//       } else {
//         // Create a new user
//         new User({
//           googleId: profile.id,
//           displayName: profile.displayName,
//           email: profile.emails[0].value
//         })
//         .save()
//         .then(user => done(null, user));
//       }
//     })
//     .catch(err => done(err, null));
// }
// ));

// Define API routes here (e.g., for fetching communication history, sending emails)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server listening on port ${port}`));
