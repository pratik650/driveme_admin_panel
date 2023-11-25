import React from 'react';
import '../../css/repayment.css'; // Make sure to create a CSS file with your styles

const Repayments = () => {
  const repayments = [
    { id: '34334', date: '2023-11-22', principal: '26.48', interest: '3.22', penalties: '0.00', total: '32.92' },
    { id: '00100-1', date: '2023-11-21', principal: '10.00', interest: '2.50', penalties: '0.00', total: '12.50' },
    { id: '12345', date: '2023-11-20', principal: '240.74', interest: '23.01', penalties: '0.00', total: '539.88' },
    { id: '10027Ty', date: '2023-11-19', principal: '500.00', interest: '0.10', penalties: '50.00', total: '550.10' },
    { id: 'Aman', date: '2023-11-17', principal: '5000.00', interest: '50.00', penalties: '0.00', total: '5050.00' },
    { id: '10027Ty', date: '2023-11-16', principal: '850.00', interest: '4.50', penalties: '0.00', total: '854.50' }
    // ... add other repayment objects
  ];

  // Function to handle dropdown actions (you will implement actual actions later)
  const handleAction = (action, loanId) => {
    console.log(`Action: ${action} on loan ID: ${loanId}`);
    // Here you will handle the actions like view details, delete etc.
  };

  return (
    <div className="loan-repayments-container">
      <h2>Loan Repayments</h2>
      <table>
        <thead>
          <tr>
            <th>Loan ID</th>
            <th>Payment Date</th>
            <th>Principal Amount</th>
            <th>Interest</th>
            <th>Late Penalties</th>
            <th>Total Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {repayments.map(repayment => (
            <tr key={repayment.id}>
              <td>{repayment.id}</td>
              <td>{repayment.date}</td>
              <td>{repayment.principal}</td>
              <td>{repayment.interest}</td>
              <td>{repayment.penalties}</td>
              <td>{repayment.total}</td>
              <td>
                <select className="action-select" onChange={(e) => handleAction(e.target.value, repayment.id)}>
                  <option value="">Select Action</option>
                  <option value="view">View Details</option>
                  <option value="loanDetails">Loan Details</option>
                  <option value="delete">Delete</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Repayments;
