import express from 'express';
import controller from '../controllers/userController.js';
const usersRouter = express.Router();
usersRouter.get('/all', controller.getAllUsers);
export { usersRouter };
