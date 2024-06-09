const Project = require('../models/Project');
const User = require('../models/User');
const episodeService = require('./episodeService');

class ProjectService {
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
    const user = await User.findById(userId).populate({
      path: 'projects',
      populate: { path: 'episodes' }
    });
    if (!user) {
      throw new Error('User not found');
    }

    return user.projects;
  }
}

module.exports = ProjectService;
