const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  googleId: { type: String, required: true, unique: true },
  displayName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  // Additional user properties
  avatarUrl: { type: String }, // URL for user's profile picture
  createdAt: { type: Date, default: Date.now }, // Timestamp of user creation
  preferences: {
    type: Object,
    default: {}, // Default empty preferences object
    // Example preference fields (you can add more as needed)
    theme: { type: String, default: 'light' }, // UI theme preference
    language: { type: String, default: 'en' }, // Language preference
  }
});

module.exports = mongoose.model('User', userSchema);
