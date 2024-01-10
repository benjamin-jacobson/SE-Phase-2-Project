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

  function AddGoalFunction(newGoal){
    console.log(newGoal)
    setData([...data, newGoal]) // Updating goal state.
  }

  function LogGoalFunction(x, data){
    console.log(x)
    console.log(data)
    console.log("----")
    // setData([...data, newGoal]) // Updating goal state by adding date to the ID array
    // Find the dictionary with id = 5
//     const dictionaryWithId = data.find(item => item.id === x.idOfJane);

// // Check if the dictionary was found
//     if (dictionaryWithId) {
//       // console.log(`Dictionary with id:${x}`);
//       console.log(dictionaryWithId)
//     } else {
//       console.log(`Dictionary with id:${x}`);
//     }

//     // myArray = [...dictionaryWithId.datesGoalMet, 5];
//     // console.log(myArray)

    const modifiedEmployees = data.map(obj => {
      if (obj.id === x.idOfJane) {
          return { ...obj, datesGoalMet: [...obj.datesGoalMet, x.selectedDate]};
      }
      return obj;
  });
   
  console.log(modifiedEmployees);
  setData(modifiedEmployees)
  }

  console.log(data)

  let contextData ={data: data, 
                    AddGoalFunction: AddGoalFunction,
                    LogGoalFunction: LogGoalFunction}

  return (
    <div className="app-container">
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <Outlet context={contextData}/>
    </div>
  );
};

export default App;
