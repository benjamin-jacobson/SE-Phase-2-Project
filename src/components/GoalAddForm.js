import React, { useState } from 'react';

const MyForm = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    goal: '',
    metric: '',
    category: 'daily'
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
    // You can perform actions with the form data here (e.g., send it to a server)
    console.log('Form submitted with data:', formData);

    // Posting data
    const goalsUrl = "http://localhost:4000/goals"
    fetch(goalsUrl, {
      method: "POST",
      headers: {"Content-Type":"application/json",
    },
    body:JSON.stringify(formData)
    })
    .then((r) => r.json())
    .then((newRecord) => console.log(newRecord))
    
    // Clearning Form
    setFormData(
      {goal: '',
        metric: '',
        category: 'daily'}
    )
  };

  return (
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
  );
};

export default MyForm;
