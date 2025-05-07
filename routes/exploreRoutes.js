const express = require('express');
const router = express.Router();
const exploreController = require('../controllers/exploreController');

router.get('/explore', exploreController.getExploreData);
router.get('/search', exploreController.searchUsers);

module.exports = router;