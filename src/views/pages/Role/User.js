// React component
import React, { useState, useEffect } from 'react';
import '../../../css/userrole.css'; // Make sure to create a UserList.css file in the same directory



const User = () => {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    fetchDriverData();
  }, []); // The empty array ensures this effect runs once on mount

  const fetchDriverData = async () => {
    try {
        const response = await fetch('http://192.168.1.20:5000/api/users/userDetails');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        if (result.success && Array.isArray(result.data)) {
          setUsers(result.data); 
        } else {
          console.error("Response success is false or data is not an array:", result);
        }
      }catch (error) {
      console.error("Error fetching driver data:", error);
    }
  };
    return (
        <div className="user-list">
            <div className="header">
                <button className="import-button">Bulk Import</button>
                <input  className="search-input" placeholder="Search" />
                <button className="new-button">+ Add New</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Photo</th>
                        <th>User Id</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td><div className="photo-placeholder"></div></td>
                            <td data-label="User Id">{user.id}</td>
                            <td data-label="Full Name">{user.fullName}</td>
                            <td data-label="Email">{user.email}</td>
                            <td data-label="Phone Number" className="phone-number">{user.Phonenumber}</td>
                            <td data-label="Address" className="address">{user.address}</td>
                            <td data-label="Action" className="action"><button className="action-button">Action</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default User;
