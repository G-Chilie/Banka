import express from 'express';

// import AccountController from '../controllers/accountController';
// import StaffController from '../controllers/staffController';
import UserController from '../controllers/userController';
import { schema, validate } from '../middleware/schemaValidators';
// import Auth from '../middleware/auth';
// import urlMiddleware from '../middleware/url';


const router = express.Router();

const {createUser} = UserController;



// client routes
router.post('/auth/signup', validate(schema.userSchema), createUser);

export default router;
