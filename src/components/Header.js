import React from "react";
import '../css/Header.css'
import NavBar from "./NavBar";
import { NavLink } from "react-router-dom";


function Header({ isDarkMode, onDarkModeClick }) {
  return (
    <header className="header-container">
      <h1 className="logo">💗 Goalster MVP  💗</h1>
      <nav>
        <ul className="nav-links">
          <li>
            <NavLink exact to="/" activeClassName="active-link">
              Home
            </NavLink>
          </li>
          {/* Add more NavLink items as needed */}
          <li>
            <NavLink exact to="/about" activeClassName="active-link">
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )}


//   return (
//     <header className="header-container">
//       <h1>💗 Goalster MVP  💗</h1>
//       {/* <NavBar /> */}
      
//       {/* <button onClick={onDarkModeClick}>
//         {isDarkMode ? "Dark" : "Light"} Mode
//       </button> */}
//     </header>
//   );
// }

export default Header;