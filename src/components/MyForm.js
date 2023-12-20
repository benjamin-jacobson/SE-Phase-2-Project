import React, { useState } from 'react';

const MyForm = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    goal: '',
    metric: '',
    category: 'daily'
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { goal, value } = e.target;
    setFormData({
      ...formData,
      [goal]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform actions with the form data here (e.g., send it to a server)
    console.log('Form submitted with data:', formData);
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
          id="selectedOption"
          name="selectedOption"
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
