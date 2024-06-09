const User = require('../models/User');

class UserService {
  async createUser(email) {
    const user = new User({ email });
    await user.save();
    return user;
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
}

module.exports = UserService;
