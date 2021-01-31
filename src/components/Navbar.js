import React from "react";
import "./Navbar.css"

const Navbar = () => {
  return (
    <header className="nav__bar">
        <div className="left">
            <p>CODER BLOG</p>
        </div>
        <div className="right">
            <p><a href="/">SignUp</a></p>
            <p><a href="/">SignIn</a></p>
        </div>
    </header>
  );
};

export default Navbar;
