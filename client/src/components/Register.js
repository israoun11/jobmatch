import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userRegister } from "../JS/userSlice/userSlice";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [register, setregister] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div>
      <div className="wrapper">
        <div className="modal-overlay">
          <div className="modal-container">

            <form onSubmit={(e) => e.preventDefault()} className="form-signin">
              <h2 className="form-signin-heading">Create Account</h2>
              
              <span className="input-label">Name</span>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Name"
                required=""
                autoFocus=""
                onChange={(e) => setregister({ ...register, name: e.target.value })}
              />

              <span className="input-label">Last Name</span>
              <input
                type="text"
                className="form-control"
                name="LastName"
                placeholder="LastName"
                required=""
                onChange={(e) => setregister({ ...register, lastname: e.target.value })}
              />

              <span className="input-label">Email Address</span>
              <input
                type="text"
                className="form-control"
                name="username"
                placeholder="notobama@gmail.com"
                required=""
                onChange={(e) => setregister({ ...register, email: e.target.value })}
              />

              <span className="input-label">Password</span>
              <input
                type="password"
                className="form-control"
                name="Password"
                placeholder="*******"
                required=""
                onChange={(e) => setregister({ ...register, password: e.target.value })}
              />

              <button
                className="btn btn-lg btn-primary btn-block"
                onClick={() => {
                  dispatch(userRegister(register));
                  localStorage.setItem('user', JSON.stringify({ name: register.name, email: register.email}));
                  setTimeout(()=> {
                    navigate("/profil");
                    window.location.reload();
                }, 1000);
                 
              }}
              >
                Create Account
              </button>

              <div className="modal-footer-text">
                <span>Already have an account?</span>
                <Link to="/login">Login</Link>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;