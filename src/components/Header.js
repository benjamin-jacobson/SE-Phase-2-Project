import React from "react";
import '../css/Header.css'
import { NavLink } from "react-router-dom";

function Header() {

  // const {data, AddGoalFunction} = useOutletContext();

  return (
    <header className="header-container">
      <h1 className="logo">💗 Goalster MVP  💗</h1>
      <nav>
        <ul className="nav-links">
          <li>
            <NavLink exact to="/allgoals" activeClassName="active-link">
              All Goals
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/addgoal" activeClassName="active-link">
              Add Goal
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/loggoal" activeClassName="active-link">
              Log Goal
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/Overview" activeClassName="active-link">
            Overview
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