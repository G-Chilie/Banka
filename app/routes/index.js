import express from 'express';

import AccountController from '../controllers/accountController';
import TransactionController from '../controllers/transactionController';
import UserController from '../controllers/userController';
import { schema, validate } from '../middleware/schemaValidators';
import Auth from '../middleware/auth';
import urlMiddleware from '../middleware/url';


const router = express.Router();

const { createUser, loginUser } = UserController;
const {
  createAccount, getSingleUserTransactions, getSingleTransaction, accountDetails,
} = AccountController;
const {
  ActivatOrDeactivateAccct, getAllAccounts, deleteAccount, creditAccount,
  debitAccount, getUserAccounts,
} = TransactionController;
const {
  verifyToken, isAdmin, isCashier, isCustomer, isStaff,
} = Auth;

const { verifyAccountNumber } = urlMiddleware;

// client routes
router.post('/auth/signup', validate(schema.userSchema), createUser);
router.post('/auth/login', validate(schema.loginSchema), loginUser);
router.post('/accounts', verifyToken, isCustomer, validate(schema.accountsSchema), createAccount);
router.get('/accounts/:accountNumber', verifyToken, isCustomer, verifyAccountNumber, accountDetails);
router.get('/accounts/:accountNumber/transactions', verifyToken, isCustomer, verifyAccountNumber, getSingleUserTransactions);
router.get('/transactions/:transactionId', verifyToken, isCustomer, getSingleTransaction);


// cashier routes
router.post('/transactions/:accountNumber/credit', verifyToken, isCashier, validate(schema.transactionsSchema), verifyAccountNumber, creditAccount);
router.post('/transactions/:accountNumber/debit', verifyToken, isCashier, validate(schema.transactionsSchema), verifyAccountNumber, debitAccount);

// cashier and admin routes
router.patch('/accounts/:accountNumber', verifyToken, isStaff, validate(schema.activeDeactivateSchema), verifyAccountNumber, ActivatOrDeactivateAccct);
router.get('/accounts', verifyToken, isStaff, getAllAccounts);
router.get('/user/:userEmail/accounts', verifyToken, isStaff, getUserAccounts);

// admin routes
router.delete('/accounts/:accountNumber', verifyToken, isAdmin, verifyAccountNumber, deleteAccount);


export default router;
