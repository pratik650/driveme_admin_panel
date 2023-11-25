// UserPayments.js
import React, { useState } from 'react';
import '../Viewcss/userpayment.css'; // Ensure the CSS file is correctly referenced
import WidgetsDropdown from '../widgets/WidgetsDropdown';

const RevenueStatus = () => {
  // Initial static data for demonstration
  const [payments, setPayments] = useState([
    { id: '1', userName: 'Ramesh Kumar', userCity: 'Haryana', amount: '1000', driverName: 'Ramshankar Chaturvedi', date: 'dd/mm/yyyy', time: '10:00 AM' },
    { id: '2', userName: 'Suresh Singh', userCity: 'Delhi', amount: '1500', driverName: 'Mohan Gupta', date: 'dd/mm/yyyy', time: '11:00 AM' },
    { id: '3', userName: 'Amit Patel', userCity: 'Mumbai', amount: '1200', driverName: 'Rajesh Sharma', date: 'dd/mm/yyyy', time: '12:00 PM' },
    // Add more static entries if necessary
  ]);

  // Function to handle payment deletion (placeholder for now)
  const handleDelete = (paymentId) => {
    console.log('Deleting payment with id:', paymentId);
    // Here you would also filter out the deleted payment from the state
    setPayments(currentPayments => currentPayments.filter(payment => payment.id !== paymentId));
  };

  return (
    <div className="user-payments">
        <div className='textupper'>Payment Revenue Monitoring</div>
        <WidgetsDropdown/>
      <div className="table-responsive">
        <div style={{backgroundColor:'black',color:'white',padding:'10px',marginBottom:'10px'}}>Most Recent Payments List</div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>City</th>
              <th>Amount Paid</th>
              <th>Driver</th>
              <th>Date</th>
              <th>Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id}>
                <td>{payment.userName}</td>
                <td>{payment.userCity}</td>
                <td>${payment.amount}</td>
                <td>{payment.driverName}</td>
                <td>{payment.date}</td>
                <td>{payment.time}</td>
                <td>
                  <button onClick={() => handleDelete(payment.id)}>Delete</button>
                  <button>View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RevenueStatus;



// This code is comented here for direct backend payment fetching purpose

// // UserPayments.js
// import React, { useState, useEffect } from 'react';
// import '../Viewcss/userpayment.css'; // Make sure this line correctly imports the CSS file from the right path
// import WidgetsDropdown from '../widgets/WidgetsDropdown';

// const RevenueStatus = () => {
//   const [payments, setPayments] = useState([]);

//   useEffect(() => {
//     // Replace with your actual fetch call to your backend API
//     fetch('/api/payments')
//       .then((response) => response.json())
//       .then((data) => setPayments(data))
//       .catch((error) => console.error('Error fetching payments:', error));
//   }, []);

//   // Function to handle payment deletion
//   const handleDelete = (paymentId) => {
//     // Implement deletion logic, probably calling a backend API to delete
//     console.log('Deleting payment with id:', paymentId);
//   };

//   return (
//     <div className="user-payments">
//        <div className='textupper'>Users Payment Status</div>
//        <WidgetsDropdown/>
//       <div className="table-responsive">
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>City</th>
//               <th>Amount Paid</th>
//               <th>Driver</th>
//               <th>Date</th>
//               <th>Time</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {payments.map((payment) => (
//               <tr key={payment.id}>
//                 <td>{payment.userName}</td>
//                 <td>{payment.userCity}</td>
//                 <td>{payment.amount}</td>
//                 <td>{payment.driverName}</td>
//                 <td>{payment.date}</td>
//                 <td>{payment.time}</td>
//                 <td>
//                   <button onClick={() => handleDelete(payment.id)}>Delete</button>
//                   <button>View Details</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default RevenueStatus;
