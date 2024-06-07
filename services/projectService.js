
const Project = require('../models/Project');
const User = require('../models/User');

const episodeService = require('./episodeService.js');


class ProjectService {
  async createProject(projectName) {
    const project = new Project({ projectName });
    await project.save();
    return project;
  }

  async createProjectForUser(userId, projectName) {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }

    const project = new Project({ projectName });
    await project.save();

    user.projects.push(project);
    await user.save();

    return project;
  }

  async getAllProjects(userId) {
    try {
      const user = await User.findById(userId).populate({
        path: 'projects',
        populate: {
          path: 'episodes',
          
        },
      });
      if (!user) {
        throw new Error('User not found');
      }

      return user.projects;
    } catch (error) {
      console.error('Error fetching projects:', error.message);
      throw new Error('Internal Server Error');
    }
  }

  async createEpisodeAndLinkToProject(projectId, episodeData) {
    try {
      const newEpisode = await episodeService.createEpisode(episodeData);
  
      const project = await Project.findById(projectId);
      project.episodes.push(newEpisode._id);
      await project.save();
  
      return project;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProjectService;
