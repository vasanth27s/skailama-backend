const express = require('express');
const ProjectController = require('../controllers/projectController');
const router = express.Router();
const projectController = new ProjectController();

router.post('/', projectController.createProject);
router.get('/:userId', projectController.getAllProjects);

module.exports = router;
