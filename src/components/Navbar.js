import React from "react";
import {Link} from "react-router-dom"
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="nav__bar">
      <div className="left">
        <p>CODER BLOG</p>
      </div>
      <div className="right">
        <p>
          <Link to="/register">
          <p className="p">SignUp</p>
          </Link>
        </p>
        <p>
          <Link to="/login">
          <p className="p">SignIn</p>
          </Link>
        </p>
      </div>
    </header>
  );
};

export default Navbar;
