import React from 'react';
import '../../css/expenses.css'; // Ensure you create a corresponding CSS file

const DriverSalary = () => {
    const driversSalaryData = [
        { id: 'D001', name: 'John Doe', number: '1234567890', salary: '3000', reference: 'Ref001' },
        { id: 'D002', name: 'Jane Smith', number: '0987654321', salary: '3200', reference: 'Ref002' },
        { id: 'D003', name: 'Jim Brown', number: '1122334455', salary: '3100', reference: 'Ref003' },
        { id: 'D004', name: 'Joan Baez', number: '1223344556', salary: '3300', reference: 'Ref004' },
        { id: 'D005', name: 'Jake Blues', number: '1231231234', salary: '3400', reference: 'Ref005' }
    ];



    const handleAction = (action, driverId) => {
        console.log(`Action: ${action} on driver ID: ${driverId}`);
        // Implement the action logic
    };

    return (
        <div className="drivers-salary-container">
            <h2>Driver's Salary</h2>
            <table>
                <thead>
                    <tr>
                        <th>Driver's ID</th>
                        <th>Name</th>
                        <th>Number</th>
                        <th>Salary</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {driversSalaryData.map(driver => (
                        <tr key={driver.id}>
                            <td>{driver.id}</td>
                            <td>{driver.name}</td>
                            <td>{driver.number}</td>
                            <td>${driver.salary}</td>
                            <td>
                                <select className="action-select" onChange={(e) => handleAction(e.target.value, driver.id)}>
                                    <option value="">Select Action</option>
                                    <option value="view">View Details</option>
                                    <option value="edit">Edit</option>
                                    <option value="delete">Delete</option>
                                    {/* Add more options as needed */}
                                </select>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* Pagination and other controls as needed */}
        </div>
    );
};

export default DriverSalary;
