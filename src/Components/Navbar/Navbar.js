import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="subNavbar">
        <ul>
          <Link className="link" to="/home">
            <li>HOME</li>
          </Link>
          <Link className="link" to="/product">
            <li>PRODUCTS</li>
          </Link>
          <Link className="link" to="/users">
            <li>USERS</li>
          </Link>
          <Link className="link" to="/contact">
            <li>CONTACTS</li>
          </Link>
          <Link className="link" to="/login">
           <li>LOGOUT</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
