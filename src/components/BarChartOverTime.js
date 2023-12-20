import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const BarPlotOverTime = () => {
  // Fake data and array of dates
  const data = [
    { date: "2023-01-01", value: 10 },
    { date: "2023-02-01", value: 20 },
    { date: "2023-03-01", value: 15 },
    { date: "2023-04-01", value: 25 },
  ];

  return (
    <div>
      <h2>Bar Plot Over Time</h2>
      <BarChart width={600} height={300} data={data}>
        <XAxis dataKey="date" type="category" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default BarPlotOverTime;
