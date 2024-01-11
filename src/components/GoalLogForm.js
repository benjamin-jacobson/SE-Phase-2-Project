import React, { useState, useEffect} from 'react';
import { useOutletContext } from 'react-router-dom';

function GoalLogForm(){

  const {data, AddGoalFunction, LogGoalFunction} = useOutletContext();
  const choices_goals = data.map((i) => {return i.goal})

  // const animalOptions = data.map((i) => {return i.goal})
  const [selectedGoal, setSelectedGoal] = useState('')
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSelectChange = (e) => {
    setSelectedGoal(e.target.value);
  };

  const handleDateChange = (event) => {
    const dateValue = event.target.value;  // The selected date available in the event.target.value
    setSelectedDate(dateValue);
    // console.log(dateValue)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected goal for logging:', selectedGoal);
    console.log(e.target.value) // this is just the goal name

    // Getting the ID from the form
    function findIdByKeyValue(key, value) {
      const foundObject = data.find(item => item[key] === value);
      return foundObject ? foundObject.id : null;
    }
    const idOfJane = findIdByKeyValue('goal', selectedGoal);


    // let outputPatchedArray = [...data[idOfJane].datesGoalMet, selectedDate]
    let outputPatchedArray = [...data.find(item => item.id === idOfJane)?.datesGoalMet, selectedDate]

    console.log("carrrrrtttddgsgsfgf")
    console.log(outputPatchedArray);
    console.log("carrrrrtttddgsgsfgf")
    // setData(modifiedEmployees)

    let ouputData = {idOfJane, selectedDate}

    // UPDATE PATCH based on ID add date to array // Get the array using state, and update it.. who goal item or just key/value pair needed to update? TODO
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