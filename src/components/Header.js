import React from "react";
import './Header.css'

function Header({ isDarkMode, onDarkModeClick }) {
  return (
    <header className="header-container">
      <h1>💗 Goalster MVP  💗</h1>
      <button onClick={onDarkModeClick}>
        {isDarkMode ? "Dark" : "Light"} Mode
      </button>
    </header>
  );
}

export default Header;