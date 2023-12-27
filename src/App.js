import logo from './logo.svg';
import './App.css';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import MyForm from './components/MyForm';
import Header from './components/Header';
// import BarPlotOverTime from './components/BarChartOverTime';
import React, { useState, useEffect } from 'react';
// import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import Summary from './components/Summary';

function App() {

  const [isDarkMode,setIsDarkMode] = useState(false)
  const [data, setData] = useState([])

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode)
  }

  // Getting Data From JSON DB
  useEffect(() => {
    const url = "http://localhost:4000/animals"
    fetch(url,
      {method: "GET",
      headers: {"Content-Type":"application/json"}
    })
    .then((res) => res.json())
    .then((dataa) => setData(dataa))
  },[])

  const animals = [
    {name:"Birds", value: 100000},
    {name:"Cats", value: 50000},
    {name:"Dogs", value: 65000},
    {name:"Sloths", value: 40008},
  ];

  const datatime = [
    { date: "2023-01-01", value: 10 },
    { date: "2023-02-01", value: 20 },
    { date: "2023-03-01", value: 15 },
    { date: "2023-04-01", value: 25 },
  ];

  return (
  
    <div style={{textAlign:"center"}} >
             
      <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      </div>
      <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Summary data={animals} />
      </div>
      <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <h1>Controlled  Form</h1>
      <MyForm />
    </div>

      <h2>Bar Plot Over Time</h2>
      <BarChart width={200} height={300} data={datatime}>
        <XAxis dataKey="date" type="category" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>


      <PieChart className={"App " + (isDarkMode ? "dark" : "light")} width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={animals}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
    
        {/* <BarChart width={150} height={40} data={data}>
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart> */}

        <BarChart className={"App " + (isDarkMode ? "dark" : "light")}
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="value" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
        </div>
    
  );
}

export default App;