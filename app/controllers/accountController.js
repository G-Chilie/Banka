import accountModel from '../models/accountModel';
import transactionModel from '../models/transactionModel';

class AccountController {
  static async createAccount(req, res) {
    const { user } = req;
    try {
      const account = await accountModel.create(req, res, user.userId);
      if (account.length) {
        return res.status(201).send({
          status: 201,
          message: 'Account created successfully',
          data: account[0],
        });
      }
    } catch (error) {
      return res.status(500).send({
        status: 500,
        error: 'Unable to Create Account!! Server Error, Try Again',
      });
    }
  }

  static async getSingleUserTransactions(req, res) {
    try {
      const transactions = await transactionModel.getAllTransactions(req, res);
      if (transactions.length) {
        return res.status(200).send({
          status: 200,
          data: transactions,
        });
      }
    } catch (error) {
      return res.status(500).send({
        status: 500,
        error: error.message,
      });
    }
  }

  static async accountDetails(req, res) {
    try {
      const details = await accountModel.getAccount(req, res);
      if (details.length) {
        return res.status(200).send({
          status: 200,
          data: details[0],
        });
      }
    } catch (error) {
      return res.status(500).send({
        status: 500,
        error: 'Server Error, Please Try Again',
        message: error.message,
      });
    }
  }

  static async getSingleTransaction(req, res) {
    try {
      const transaction = await transactionModel.getOneTransaction(req, res);
      if (transaction.length) {
        return res.status(200).send({
          status: 200,
          data: transaction[0],
        });
      }
    } catch (error) {
      return res.status(500).send({
        status: 500,
        error: error.message,
      });
    }
  }
}

export default AccountController;
