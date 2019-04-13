import express from 'express';

import AccountController from '../controllers/accountController';
import UserController from '../controllers/userController';
import Validator from '../middleware/formValidator';
import AccountValidator from '../middleware/accountValidator';
import Verifyuser from '../helpers/auth';
import StaffController from '../controllers/staffController';



const router = express.Router();

const { createUser, userLogin } = UserController;
const { createAccount } = AccountController;
const { userValidation, loginValidation } = Validator;
const { acctValidation } = AccountValidator;
const { ActivatOrDeactivateAccct, deleteAccount, creditAccount, debitAccount
  } = StaffController;



// User routes
router.post('/auth/signup', userValidation, createUser);
router.post('/auth/login', loginValidation, userLogin);
router.post('/accounts', acctValidation, Verifyuser, createAccount);

// admin routes
router.patch('/accounts/:accountNumber', Verifyuser, ActivatOrDeactivateAccct);

export default router;
