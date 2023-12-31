import React from 'react';
import { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";

import './css/App.css'; // Import your CSS file for global styling


import Header from './components/Header';
import Summary from './components/Summary';

function App(){
  const [data, setData] = useState([])
  const [isDarkMode,setIsDarkMode] = useState(false)

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode)
  }

  useEffect(() => {
    const url = "http://localhost:4000/goals"
    fetch(url,
      {method: "GET",
      headers: {"Content-Type":"application/json"}
    })
    .then((res) => res.json())
    .then((dataa) => setData(dataa))
    .catch(error => console.error(error));
  },[])

  console.log(data)

  return (
    <div className="app-container">
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <Outlet context={data}/>
    </div>
  );
};

export default App;
