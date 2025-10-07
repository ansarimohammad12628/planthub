import React, { useState } from "react";
import "../Css/LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logged in with Email: ${email}`);
    // future logic: authentication, redux, API call
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-left">
          <img
            src="https://images.unsplash.com/photo-1603415526960-6b9c9a9b631d?auto=format&fit=crop&w=400&q=80"
            alt="Money Plant"
          />
        </div>
        <div className="login-right">
          <h2>Welcome Back 🌿</h2>
          <p>
            Login to access your Plantify account and grow your green space!
          </p>
          <form onSubmit={handleLogin} className="login-form">
            <div className="input-group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label>Email</label>
            </div>
            <div className="input-group">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label>Password</label>
            </div>
            <button type="submit">Login</button>
          </form>
          <p className="signup-link">
            Don't have an account? <a href="#signup">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
