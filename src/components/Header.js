import React from "react";

function Header({ isDarkMode, onDarkModeClick }) {
  return (
    <header>
      <h1>💗 Goalster MVP  💗</h1>
      <button onClick={onDarkModeClick}>
        {isDarkMode ? "Dark" : "Light"} Mode
      </button>
    </header>
  );
}

export default Header;