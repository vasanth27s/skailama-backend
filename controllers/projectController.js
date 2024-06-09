const projectService = require('../services/projectService');

class ProjectController {
  async createProject(req, res) {
    try {
      const { userId, projectName } = req.body;
      const project = await projectService.createProjectForUser(userId, projectName);
      res.status(201).json(project);
    } catch (error) {
      console.error('Error creating project:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getAllProjects(req, res) {
    try {
      const userId = req.params.userId;
      const projects = await projectService.getAllProjects(userId);
      res.json({ data: projects });
    } catch (error) {
      console.error('Error fetching projects:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = ProjectController;
