import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import './App.css'; // Import your CSS file for global styling

function App(){
  const [isDarkMode,setIsDarkMode] = useState(false)

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode)
  }

  return (
    <div className="app-container">
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <div className="grid-container">
        <div className="grid-item"><p>Hi I am 1.</p></div>
        <div className="grid-item">2</div>
        <div className="grid-item">3</div>
      </div>
    </div>
  );
};

export default App;
