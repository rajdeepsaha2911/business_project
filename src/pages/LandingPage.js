import React, { useState } from "react";
import { Link } from "react-router-dom";
const LandingPage = () => {
  const [isActive, setIsActive] = useState(false);

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };
  return (
    <div className={isActive ? "container active" : "container"}>
      <div className="form-box login">
        <form>
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <i className="bx bxs-user"></i>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <i className="bx bxs-lock"></i>
          </div>
          <div className="forget-link">
            <Link to="/ForgetPassword">Forget Password</Link>
          </div>
          <button type="submit" className="btn">
            Login
          </button>
          <p>or login with social platforms</p>
          <div className="social-icons">
            <Link to="https://accounts.google.co.in/">
              <i className="bx bxl-google"></i>
            </Link>
            <Link to="https://www.facebook.com/your.username">
              <i className="bx bxl-facebook-square"></i>
            </Link>
            <Link to="https://github.com/login">
              <i className="bx bxl-github"></i>
            </Link>
            <Link to="https://www.linkedin.com/login">
              <i className="bx bxl-linkedin-square"></i>
            </Link>
          </div>
        </form>
      </div>
      <div className="form-box register">
        <form action="">
          <h1>Registration</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <i className="bx bxs-user"></i>
          </div>
          <div className="input-box">
            <input type="email" placeholder="Email" required />
            <i className="bx bxs-envelope"></i>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <i className="bx bxs-lock"></i>
          </div>
          <button type="submit" className="btn">
            Login
          </button>
          <p>or register with social platforms</p>
          <div className="social-icons">
            <Link to="https://accounts.google.co.in/">
              <i className="bx bxl-google"></i>
            </Link>
            <Link to="https://www.facebook.com/your.username">
              <i className="bx bxl-facebook-square"></i>
            </Link>
            <Link to="https://github.com/login">
              <i className="bx bxl-github"></i>
            </Link>
            <Link to="https://www.linkedin.com/login">
              <i className="bx bxl-linkedin-square"></i>
            </Link>
          </div>
        </form>
      </div>
      <div className="toggle-box">
        <div className="toggle-panel toggle-left">
          <h1>Hello,Welcome!</h1>
          <p>Don't have an account</p>
          <button className="btn register-btn" onClick={handleRegisterClick}>
            Register
          </button>
        </div>
        <div className="toggle-panel toggle-right">
          <h1>Welcome Back!</h1>
          <p>Already have an account</p>
          <button className="btn login-btn" onClick={handleLoginClick}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
