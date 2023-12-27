import React from 'react';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import './css/App.css'; // Import your CSS file for global styling
import { Outlet } from "react-router-dom";

function App(){
  const [data, setData] = useState([])
  const [isDarkMode,setIsDarkMode] = useState(false)

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode)
  }

  useEffect(() => {
    const url = "http://localhost:4000/animals"
    fetch(url,
      {method: "GET",
      headers: {"Content-Type":"application/json"}
    })
    .then((res) => res.json())
    .then((dataa) => setData(dataa))
    .catch(error => console.error(error));
  },[])

  return (
    <div className="app-container">
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <Outlet />
      <div className="grid-container">
        <div className="grid-item"><p>Hi I am 1.</p></div>
        <div className="grid-item">2</div>
        <div className="grid-item">3</div>
      </div>
    </div>
  );
};

export default App;
