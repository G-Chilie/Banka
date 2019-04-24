import pool from '../db';
import auth from '../middleware/auth';
import createAccount from '../model/accountQuerie'
import accountQueries from '../model/accountQuerie';

class Account {
  static async createAccount(req, res) {
    const user = auth.tokenBearer(req);

    // check the status of user ADMIN or USER
    if (!user.isAdmin && user.type.toLowerCase() === 'user') {
      const owner = user.userId;
      const accountNo = Math.floor(Math.random() * 1000000000);
      const createdOn = new Date();

      const { type, status, openingBalance } = req.body;
      const values = [accountNo, createdOn, owner, type.trim(), status.trim(), openingBalance];


      try {
        const { rows } = await pool.query(accountQueries.createAccount, values);
        return res.status(201).send({
          status: 201,
          message: 'Account created successfully',
          data: rows[0],
        });
      } catch (error) {
        return res.status(500).send({
          status: 500,
          error: 'Unable to Create Account!! Server Error, Try Again',
        });
      }
    }
    return res.status(401).json({
      status: 401,
      error: 'you must be a user to perform this task',
    });
  }

  // Get All Transactions

  static async getAllTransactions(req, res) {
    const user = auth.tokenBearer(req);
    if (!user.isAdmin && user.type.toLowerCase() === 'user') {
      const query = 'SELECT * FROM transactions WHERE accountNo = $1';

      try {
        const { rows } = await pool.query(query, [req.params.accountNumber]);
        if (!rows || rows.length === 0) {
          return res.status(404).send({
            status: 404,
            error: 'No existing transactions for this account',
          });
        }

        return res.status(200).send({
          status: 200,
          data: rows,
        });
      } catch (error) {
        return res.status(500).send({
          status: 500,
          error: error.message,
        });
      }
    } else {
      return res.status(401).json({
        status: 401,
        error: 'you must be a user to perform this task',
      });
    }
  }

  // Specific Transaction

  static async getTransaction(req, res) {
    const user = auth.tokenBearer(req);
    if (!user.isAdmin && user.type.toLowerCase() === 'user') {

       try {
        const { rows } = await pool.query(accountQueries.getTransaction, [req.params.transactionId]);
        if (!rows[0]) {
          return res.status(404).send({
            status: 404,
            error: 'The selected transaction does not exist',
          });
        }

        return res.status(200).send({
          status: 200,
          data: rows[0],
        });
      } catch (error) {
        return res.status(500).send({
          status: 500,
          error: error.message,
        });
      }
    } else {
      return res.status(401).json({
        status: 401,
        error: 'you must be a user to perform this task',
      });
    }
  }

  static async accountDetails(req, res) {
    const user = auth.tokenBearer(req);
    if (!user.isAdmin && user.type.toLowerCase() === 'user') {
      const query = 'SELECT * FROM accounts WHERE accountNo = $1';
      try {
        const { rows } = await pool.query(query, [req.params.accountNumber]);
        if (!rows[0]) {
          return res.status(404).send({
            status: 404,
            data: 'Account does not exist',
          });
        }

        return res.status(200).send({
          status: 200,
          data: rows[0]
        });
      } catch (error) {
        return res.status(500).send({
          status: 500,
          error: 'Server Error, Please Try Again',
          message: error.message,
        });
      }
    }
    return res.status(401).json({
      status: 401,
      message: 'you must be a user to perform this task',
    });
  }

}



export default Account;