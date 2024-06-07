
const express = require('express');
const router = express.Router();
const episodeController = require('../controllers/episodeController.js');

router.put('/:episodeId', episodeController.updateEpisodeDescription);

module.exports = router;
