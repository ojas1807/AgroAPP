const express = require('express');
const { register, login } = require('../controllers/authController.js');
const authRoutes = express.Router();

// User Registration Route
authRoutes.post('/signup', register);

// User Login Route
authRoutes.post('/login', login);

module.exports = authRoutes;




