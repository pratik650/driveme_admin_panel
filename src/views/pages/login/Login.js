import React, { useState } from 'react';
import '../../forms/roles/addusers.css'
import backgroundVideo from '../../../assets/videos/backvideo.mp4'
import './login.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const handleChange = (e) => {
    const { name, value, type } = e.target;
  let finalValue = value;

  setFormData({ ...formData, [name]: finalValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://lsdriver.co.in/api/admin/login', {
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
      alert("Success", "Your Logined successfully");
      navigate('/dashboard');
      console.log("Login Succesfull");
      

    } catch (error) {
      alert("Error", error.message);
      
    }
  };
  return (
    <div className="min-vh-100 d-flex flex-row align-items-center">
    <video autoPlay loop muted style={{
      position: "fixed",
      width: "100%",
      left: "50%",
      top: "50%",
      height: "100%",
      objectFit: "cover",
      transform: "translate(-50%, -50%)",
      zIndex: "-1"
    }}>
      <source src={backgroundVideo} type="video/mp4" />
    </video>
      <div className="form-container">
      <div className='textupper'>Driver Registration Form</div>
        <form onSubmit={handleSubmit}>
          {/* Full Name Input */}
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter username"
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
          {/* Submit Button */}
          <button type="submit" className="submit-button">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
