import React from "react";
import '../css/Header.css'
// import NavBar from "../archive/NavBar";
import { NavLink } from "react-router-dom";


function Header({ isDarkMode, onDarkModeClick }) {
  return (
    <header className="header-container">
      <h1 className="logo">💗 Goalster MVP  💗</h1>
      <nav>
        <ul className="nav-links">
          <li>
            <NavLink exact to="/goaltracker" activeClassName="active-link">
              GoalTracker
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/home" activeClassName="active-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/about" activeClassName="active-link">
              About
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/reports" activeClassName="active-link">
              Reports
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )}

export default Header;