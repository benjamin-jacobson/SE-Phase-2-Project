import React, { useState } from 'react';

const MyForm = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    goal: '',
    metric: '',
    category: '',
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
      <label>
      Category:
        <input
          type="category"
          name="category"
          value={formData.category}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
