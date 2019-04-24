const accountQueries = {
    createAccount: `INSERT INTO accounts(accountNo, createdOn, owner, type, status, openingBalance)
    VALUES ($1, $2, $3, $4, $5, $6) 
    RETURNING accountNo, createdOn, owner, type, openingBalance, status`,

    getTransaction: 'SELECT * FROM transactions WHERE transaction_id = $1'
}



export default accountQueries