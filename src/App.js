import React from 'react';
import './LoginForm.css';

const LoginForm = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login</h1>
        <form>
          <div className="input-group">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" required />
          </div>
          <div className="forgot-password">
            <a href="#">Forgot password?</a>
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
