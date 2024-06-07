const ProjectService = require('../services/projectService');
const Project = require('../models/Project');
const projectService = new ProjectService();

const episodeService = require('../services/episodeService.js');

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
      res.json( {data: projects} );
    } catch (error) {
      console.error('Error handling request:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async createEpisode(req, res) {
    const { projectId } = req.params;
    const { episodeName, description } = req.body;

    try {
      const project = await projectService.createEpisodeAndLinkToProject(projectId, { episodeName, description });
      res.json(project);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteEpisode (req, res)  {
    try {
      const { projectId, episodeIndex } = req.params;

      const project = await Project.findById(projectId);

      if (!project) {
        return res.status(404).json({ message: 'Project not found' });
      }

      if (episodeIndex < 0 || episodeIndex >= project.episodes.length) {
        return res.status(400).json({ message: 'Invalid episode index' });
      }

      const episodeId = project.episodes[episodeIndex];

      await episodeService.deleteEpisode(episodeId);

      project.episodes.splice(episodeIndex, 1);

      await project.save();

      res.status(200).json({ message: 'Episode deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

}

module.exports = ProjectController;