import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../img/logo.png";
import SignUp from "../SignUp/SignUp";
import icon from '../../img/Instant_logo.png';

const Navbar = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light box-shadow-bottom">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">
                For You
              </a>
              <div className="dropdown-menu mt-4">
                  <a href="#" className="dropdown-item box-shadow-bottom-item">Find matching internships</a>
                  <a href="#" className="dropdown-item box-shadow-bottom-item">Hire right talent</a>
                  <a href="#" className="dropdown-item">Work from Home</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <img src={icon} alt=""/> Instant Apply
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                About Us
              </a>
            </li>
            <li className="sign-up-btn">
              <button onClick={openModal}>SIGN UP</button>
              <SignUp modalIsOpen={modalIsOpen} closeModal={closeModal} />
            </li>
            <li className="login-btn">
              <button>LOGIN</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
