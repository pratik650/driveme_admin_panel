import React from 'react';
import '../Viewcss/Transaction.css';

const Transactions = () => {
  // This would be fetched from a backend in a real app
  const transactions = [
    {
        id: 'tx1001',
        date: '2023-11-22 15:31',
        member: 'John Doe',
        accountNumber: '10005001',
        amount: '-$29.70',
        debitCredit: 'DR',
        type: 'Loan Repayment',
        status: 'Completed'
      },
      {
        id: 'tx1002',
        date: '2023-11-21 00:20',
        member: 'Jane Smith',
        accountNumber: '20005001',
        amount: '+$263.75',
        debitCredit: 'CR',
        type: 'Deposit',
        status: 'Pending'
      },
      {
        id: 'tx1003',
        date: '2023-11-20 23:05',
        member: 'Ahmed Farah',
        accountNumber: '10001000',
        amount: '-$500.00',
        debitCredit: 'DR',
        type: 'Withdraw',
        status: 'Completed'
      },
  ];

  // Functions to handle user actions
  const handleEdit = (transactionId) => {
    console.log('Editing transaction with id:', transactionId);
    // Implement edit functionality
  };

  const handleDelete = (transactionId) => {
    console.log('Deleting transaction with id:', transactionId);
    // Implement delete functionality
  };

  const handleDetails = (transactionId) => {
    console.log('Showing details for transaction with id:', transactionId);
    // Implement details functionality
  };

  return (
    <div className="transactions-container">
      <h2>Transaction History</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Member</th>
            <th>Account Number</th>
            <th>Amount</th>
            <th>Debit/Credit</th>
            <th>Type</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.member}</td>
              <td>{transaction.accountNumber}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.debitCredit}</td>
              <td>{transaction.type}</td>
              <td>{transaction.status}</td>
              <td>
                <select onChange={(e) => {
                  const action = e.target.value;
                  if (action === 'edit') handleEdit(transaction.id);
                  if (action === 'delete') handleDelete(transaction.id);
                  if (action === 'details') handleDetails(transaction.id);
                }}>
                  <option value="">Action</option>
                  <option value="edit">Edit</option>
                  <option value="delete">Delete</option>
                  <option value="details">Details</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
