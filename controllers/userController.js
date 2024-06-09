const userService = require('../services/userService');

class UserController {
  async createUser(req, res) {
    try {
      const { email } = req.body;
      const user = await userService.createUser(email);
      res.status(201).json({ user });
    } catch (error) {
      console.error('Error creating user:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = UserController;
