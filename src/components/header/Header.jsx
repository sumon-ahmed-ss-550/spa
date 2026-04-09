import React from "react";
import { NavLink } from "react-router";
import "./header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink className="anchor" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="anchor" to="/features">
              Features
            </NavLink>
          </li>
          <li>
            <NavLink className="anchor" to="/users">
              Users
            </NavLink>
          </li>
          <li>
            <NavLink className="anchor" to="/pricing">
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink className="anchor" to="/about">
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
