import accountDb from '../db/account';
// import transactionDb from '../db/transaction';

export default class StaffController {
    static ActivatOrDeactivateAccct(req, res) {
      const { isAdmin } = req.decoded;
      const { accountNumber } = req.params;
      const { status } = req.body;
      const statusOptions = ['dormant', 'active'];
  
      if (!statusOptions.includes(status)) {
        return res.status(401).json({
          status: status !== 'dormant',
          statuss: 401,
          message: 'Invalid account status field, status should be "dormant" or "active"',
        });
      }
  
      if (isAdmin !== 'true') {
        return res.status(409).json({
          status: 409,
          message: 'only an admin is allow to perform this task',
        });
      }
  
      const account = accountDb.find(acct => acct.accountNumber === Number(accountNumber));
  
      if (!account) {
        return res.status(404).json({
          status: 404,
          message: 'Selected account not found',
        });
      }
  
      account.status = req.body.status || account.status;
      return res.status(200).json({
        status: 200,
        data: {
          accountNumber,
          status,
        },
      });
    }
}