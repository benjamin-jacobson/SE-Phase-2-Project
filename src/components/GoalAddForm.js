import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

const GoalAddForm = () => {

  const {data, AddGoalFunction, LogGoalFunction} = useOutletContext();

  const currentDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

  // State 
  const [formData, setFormData] = useState({
    goal: '',
    metric: '',
    category: 'daily',
    datesGoalMet: [],
    completed: false,
    creationDate: currentDate
    
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('Form submitted with data:', formData);

    // Posting data
    const goalsUrl = "http://localhost:4000/goals"
    fetch(goalsUrl, {
      method: "POST",
      headers: {"Content-Type":"application/json",
    },
    body:JSON.stringify(formData)
    })
    .then((r) => r.json())
    .then((newRecord) => AddGoalFunction(newRecord))
    
    // Clearning Form
    setFormData(
      {goal: '',
        metric: '',
        category: 'daily'}
    )
  };

  return (
    <div>
    <h3> Goal Adding Tool</h3>
    <form onSubmit={handleSubmit}>
      <label>
        Goal:
        <input
          type="text"
          name="goal"
          value={formData.goal}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
      Metric:
        <input
          type="metric"
          name="metric"
          value={formData.metric}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <div>
        <label htmlFor="selectedOption">Select a category:</label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleInputChange}
        >
          <option value="daily">Daily</option>
          <option value="monthly">Monthly</option>
          <option value="3yearplan">3 Year Plan</option>
          <option value="bucketlist">Bucket List</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default GoalAddForm;