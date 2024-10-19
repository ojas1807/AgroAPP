const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Please fill a valid email address'], // Regex for email validation
    },
    password: { type: String, required: true },
    phoneNo: { type: String, required: true, unique: true }, // Phone number field
    gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true }, // Gender field
  },
  { timestamps: true }
);


module.exports = mongoose.model('User', userSchema);
