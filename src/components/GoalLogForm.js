import React, { useState, useEffect} from 'react';
import { useOutletContext } from 'react-router-dom';

function GoalLogForm(){

  const {data, AddGoalFunction, LogGoalFunction} = useOutletContext();
  const choices_goals = data.map((i) => {return i.goal})

  // State
  const [selectedGoal, setSelectedGoal] = useState('')
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSelectChange = (e) => {
    setSelectedGoal(e.target.value);
  };

  const handleDateChange = (event) => {
    const dateValue = event.target.value
    setSelectedDate(dateValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected goal for logging:', selectedGoal);

    // Getting the ID from the form
    function findIdByKeyValue(key, value) {
      const foundObject = data.find(item => item[key] === value);
      return foundObject ? foundObject.id : null;
    }
    const idOfJane = findIdByKeyValue('goal', selectedGoal);

    let outputPatchedArray = [...data.find(item => item.id === idOfJane)?.datesGoalMet, selectedDate]
    let ouputData = {idOfJane, selectedDate}

    // DB Patch/Update
    let url = `http://localhost:4000/goals/${idOfJane}`
    fetch(url,{
        method: "PATCH",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({
          datesGoalMet: outputPatchedArray})
        })
      .then((res) => res.json() )
      .then((x) => LogGoalFunction(x)) //updates state in data via App
  }

  return (
    <div>
      <h3> Goal Logging Tool</h3>
    <form onSubmit={handleSubmit}>
      <label htmlFor="animal">Choose a goal: </label>
      <select id="goalid" name="goalid" value={selectedGoal} onChange={handleSelectChange}>
        {choices_goals.map((g) => (
          <option key={g} value={g}>
            {g}
          </option>
        ))}
      </select>
      <br />
      <label htmlFor="dateInput">Select a date:</label>
      <input
        type="date"
        id="dateInput"
        onChange={handleDateChange}
        required
      />
      <button type="submit">Submit</button>
      </form>
      </div>
);
}
export default GoalLogForm;