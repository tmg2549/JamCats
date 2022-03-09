const express = require('express');
const userController = require('../controllers/userController.js');

const userRouter = express.Router();

userRouter.get(
  '/info',
  userController.validateCookie,
  userController.checkUser,
  userController.getJamSessions,
  userController.getPlaylists,
  (req, res) => {
    return res.status(200).json(res.locals);
  }
);

module.exports = userRouter;
