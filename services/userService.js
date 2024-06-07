
const User = require('../models/User');

class UserService {
  async createUser(email) {
    const user = new User({ email });
    await user.save();
    return user;
  }

 
}

module.exports = UserService;
