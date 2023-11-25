import React, { useState } from 'react';
import './addusers.css';
// Additional imports if needed

const AddDriver = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    email: '',
    password: '',
    Phonenumber: '',
    adhaarId: '',
    birthdate: '',
    eligible: 'false',
    available: 'false',
    // Add other form fields as needed
  });
  const handleChange = (e) => {
    const { name, value, type } = e.target;
  let finalValue = value;

  if (type === 'checkbox') {
    finalValue = e.target.checked;
  } else if (type === 'radio') {
    finalValue = value === 'true'; // Convert string 'true'/'false' to Boolean
  }

  setFormData({ ...formData, [name]: finalValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://192.168.1.20:5000/api/drivers/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorBody = await response.text(); // or response.json() if the server sends JSON
        console.log('Error response body:', errorBody);
        throw new Error('Server responded with an error!');
      }

      const json = await response.json();
      alert("Success", "Your registration is successful");
      console.log("Registration successful");
      // navigation.navigate('Login'); // Uncomment this if you are using navigation in your project

    } catch (error) {
      alert("Error", error.message);
      
    }
  };
  return (
    <div>
      <div className='textupper'>Driver Registration Form</div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          {/* Full Name Input */}
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter full name"
            />
          </div>
          {/* Address Input */}
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter address"
            />
          </div>
          {/* Email Input */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
            />
          </div>
          {/* Password Input */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
            />
          </div>
          {/* Phone Number Input */}
          <div className="form-group">
            <label htmlFor="Phonenumber">Phone Number</label>
            <input
              type="text"
              id="Phonenumber"
              name="Phonenumber"
              value={formData.Phonenumber}
              onChange={handleChange}
              placeholder="Enter phone number"
            />
          </div>
          {/* Aadhar ID Input */}
          <div className="form-group">
            <label htmlFor="adhaarId">Aadhar ID</label>
            <input
              type="text"
              id="adhaarId"
              name="adhaarId"
              value={formData.adhaarId}
              onChange={handleChange}
              placeholder="Enter Aadhar ID"
            />
          </div>
          {/* Birthdate Input */}
          <div className="form-group">
            <label htmlFor="birthdate">Birthdate</label>
            <input
              type="date"
              id="birthdate"
              name="birthdate"
              value={formData.birthdate}
              onChange={handleChange}
            />
          </div>
          {/* Eligible Radio Buttons */}
          <div className="form-group">
            <label>Eligible</label>
            <div>
              <label>
                <input
                  type="radio"
                  name="eligible"
                  value="true"
                  checked={formData.eligible === true}
                  onChange={handleChange}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="eligible"
                  value="false"
                  checked={formData.eligible === false}
                  onChange={handleChange}
                />
                No
              </label>
            </div>
          </div>
          {/* Available Radio Buttons */}
          <div className="form-group">
            <label>Available</label>
            <div>
              <label>
                <input
                  type="radio"
                  name="available"
                  value={true}
                  checked={formData.available === true}
                  onChange={handleChange}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="available"
                  value={false}
                  checked={formData.available === false}
                  onChange={handleChange}
                />
                No
              </label>
            </div>
          </div>
          {/* Submit Button */}
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddDriver;