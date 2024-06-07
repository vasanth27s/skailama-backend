const UserService = require('../services/userService')
const userService = new UserService();

class UserController {
  async createUser(req, res) {
    try {
      const { email } = req.body;
      const user = await userService.createUser(email);
      res.status(201).json({user});
    } catch (error) {
      console.error('Error creating user:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async createProjectForUser(req, res) {
    try {
      const { userId, projectName } = req.body;
      const project = await userService.createProjectForUser(userId, projectName);
      res.status(201).json(project);
    } catch (error) {
      console.error('Error creating project:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = UserController;