import React, { useState, useEffect} from 'react';
import { useOutletContext } from 'react-router-dom';

function GoalLogForm(){
  // State to manage form data
  // const [formData, setFormData] = useState({
  //   goal: '',
  //   metric: '',
  //   category: 'daily'
  // });

  const [data3, setData3] = useState([])

  const {data, AddGoalFunction, LogGoalFunction} = useOutletContext();

  // useEffect(() => {
  //   const url = "http://localhost:4000/goals"
  //   fetch(url,
  //     {method: "GET",
  //     headers: {"Content-Type":"application/json"}
  //   })
  //   .then((res) => res.json())
  //   .then((dataa) => setData3(dataa))
  //   .catch(error => console.error(error));
  // },[])

  // console.log(data3)

  const choices_goals = data.map((i) => {return i.goal})

  // const animalOptions = ['cat', 'dog'];
  const animalOptions = data.map((i) => {return i.goal})
  // const animalOptions = data.map((i) => {return {[i.id]: i.goal}})
  const [selectedAnimal, setSelectedAnimal] = useState('cat');

  const handleSelectChange = (e) => {
    setSelectedAnimal(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected goal for logging:', selectedAnimal);
    console.log(e.target.value)

    // Function to Get ID based on the goal selected
    function findIdByKeyValue(key, value) {
      const foundObject = data.find(item => item[key] === value);
      return foundObject ? foundObject.id : null;
    }
    
    const idOfJane = findIdByKeyValue('goal', selectedAnimal);
    // console.log(idOfJane); // Output: 2
    // console.log(selectedDate)
    let ouputData = {idOfJane, selectedDate}

    // UPDATE based on ID add date to array

    // Update data state
    LogGoalFunction(ouputData)

    
    // Additional form submission logic can go here
  }
  const [selectedDate, setSelectedDate] = useState(null);
  const handleDateChange = (event) => {
    // The selected date will be available in the event.target.value
    const dateValue = event.target.value;
    setSelectedDate(dateValue);
    // console.log(dateValue)
  };

  return (
    <div>
      <h3> Goal Logging Tool</h3>
      <h1> Then add filter below for each.Use start date goal created, goal start date, no by default, log yes</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor="animal">Choose a goal: </label>
      <select id="animgoalal" name="animgoalal" value={selectedAnimal} onChange={handleSelectChange}>
        {animalOptions.map((animal) => (
          <option key={animal} value={animal}>
            {animal}
          </option>
        ))}
      </select>
      <br />
      <label htmlFor="dateInput">Select a date:</label>
      <input
        type="date"
        id="dateInput"
        // name="selectedDate"
        // value={selectedDate}
        // onChange={(e) => setSelectedDate(e.target.value)}
        onChange={handleDateChange}
        required
      />


      <button type="submit">Submit</button>
      </form>
      </div>
);
}
export default GoalLogForm;