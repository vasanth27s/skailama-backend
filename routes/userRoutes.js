const express = require('express');
const UserController = require('../controllers/userController.js');

const router = express.Router();
const userController = new UserController();

router.post('/', userController.createUser);

module.exports = router;