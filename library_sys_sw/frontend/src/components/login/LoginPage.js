import React, { useState } from 'react';
import './login-page.css'; 
import { useNavigate } from 'react-router-dom';
import { verify } from './verify';


const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setFormData({
      ...formData,
      loggedIn: true
    });
    console.log(formData); 
    if (verify(formData.username, formData.password)) { 
      navigate('dashboard'); 
    }else { 
      alert('invalid credentials'); 
    }
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <div className="login-form-wrapper">
          <h2 className="login-heading">Log in</h2>
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username or Email"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="form-control"
                required
              />
            </div>
            <button type="submit" className="login-btn">Log in</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
