// routes/newsRoutes.js

const express = require('express');
const router = express.Router();
const { getAgricultureNews } = require('../controllers/newsController');

// GET route for fetching agriculture news
router.get('/', getAgricultureNews);

module.exports = router;
