// Form.js
import React from 'react';
import './addusers.css'; // Make sure this line correctly imports the CSS file from the right path

class Adduser extends React.Component {
  state = {
    fullName: '',
    address: '',
    email: '',
    password: '',
    phoneNumber: '',
    // Include other form fields from the image as needed
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, perhaps sending data to a backend server
    console.log(this.state);
  };

  render() {
    return (
    <div>
        <div className='textupper'>User Registration Form</div>
      <div className="form-container">
      <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input 
                type="text" 
                id="fullName" 
                name="fullName" 
                value={this.state.fullName} 
                onChange={this.handleChange} 
                placeholder="Enter full name" 
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input 
                type="text" 
                id="address" 
                name="address" 
                value={this.state.address} 
                onChange={this.handleChange} 
                placeholder="Enter address" 
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={this.state.email} 
                onChange={this.handleChange} 
                placeholder="Enter email" 
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                name="password" 
                value={this.state.password} 
                onChange={this.handleChange} 
                placeholder="Enter password" 
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input 
                type="text" 
                id="phoneNumber" 
                name="phoneNumber" 
                value={this.state.phoneNumber} 
                onChange={this.handleChange} 
                placeholder="Enter phone number" 
              />
            </div>
            {/* Add other form elements here based on the provided image */}
            <button type="submit" className="submit-button">Submit</button>
          </form>
      </div>
      </div>
    );
  }
}

export default Adduser;
