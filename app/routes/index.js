import express from 'express';

import UserController from '../controllers/userController';
import Validator from '../middleware/formValidator';

const router = express.Router();

const { createUser, userLogin } = UserController;
const { userValidation, loginValidation } = Validator;

// client routes
router.post('/auth/signup', userValidation, createUser);

export default router;
