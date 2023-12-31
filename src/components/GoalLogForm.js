import React, { useState, useEffect} from 'react';

function GoalLogForm(){
  // State to manage form data
  // const [formData, setFormData] = useState({
  //   goal: '',
  //   metric: '',
  //   category: 'daily'
  // });

  const [data3, setData3] = useState([])

  useEffect(() => {
    const url = "http://localhost:4000/goals"
    fetch(url,
      {method: "GET",
      headers: {"Content-Type":"application/json"}
    })
    .then((res) => res.json())
    .then((dataa) => setData3(dataa))
    .catch(error => console.error(error));
  },[])

  console.log(data3)

  const choices_goals = data3.map((i) => {return i.goal})

  // const animalOptions = ['cat', 'dog'];
  const animalOptions = data3.map((i) => {return i.goal})
  const [selectedAnimal, setSelectedAnimal] = useState('cat');

  const handleSelectChange = (e) => {
    setSelectedAnimal(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected animal:', selectedAnimal);
    // Additional form submission logic can go here
  }

  return (
    <div>
      <h1> Goal Logging Tool</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor="animal">Choose a goal: </label>
      <select id="animgoalal" name="animgoalal" value={selectedAnimal} onChange={handleSelectChange}>
        {animalOptions.map((animal) => (
          <option key={animal} value={animal}>
            {animal}
          </option>
        ))}
      </select>

      <button type="submit">Submit</button>
      </form>
      </div>
);
}
export default GoalLogForm;