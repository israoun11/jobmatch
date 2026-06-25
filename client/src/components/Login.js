import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userlogin } from "../JS/userSlice/userSlice";

function Login() {
  const navigate = useNavigate();
  const [login, setlogin] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  return (
    <div className="wrapper">
      <div className="modal-overlay">
        <div className="modal-container">
          
          <form onSubmit={(e) => e.preventDefault()} className="form-signin">
            <h2 className="form-signin-heading">Login</h2>
            
            <span className="input-label">Email Address</span>
            <input
              type="text"
              className="form-control"
              name="username"
              placeholder="notobama@gmail.com"
              required=""
              autoFocus=""
              onChange={(e) => setlogin({ ...login, email: e.target.value })}
            />
            
            <span className="input-label">Password</span>
            <input
              type="password"
              className="form-control"
              name="Password"
              placeholder="*******"
              required=""
              onChange={(e) => setlogin({ ...login, password: e.target.value })}
            />

            <button
              className="btn btn-lg btn-primary btn-block"
              onClick={() => {
                dispatch(userlogin(login));
                localStorage.setItem('user', JSON.stringify({ email: login.email, name:login.email.split('@')[0]}));
                setTimeout(() => {
                
                  navigate("/profil");
                  window.location.reload();
                }, 1000);
              }}
            >
              Login
            </button>
            
            <div className="modal-footer-text">
              <span>Don't have an account?</span>
              <Link to="/register">Create Account</Link>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}

export default Login;
