
const express = require('express');
const ProjectController = require('../controllers/projectController');

const router = express.Router();
const projectController = new ProjectController();

router.post('/', projectController.createProject);
router.get('/:userId', projectController.getAllProjects);

router.post('/:projectId/episodes', projectController.createEpisode);
router.delete('/:projectId/episodes/:episodeIndex', projectController.deleteEpisode);

module.exports = router;
