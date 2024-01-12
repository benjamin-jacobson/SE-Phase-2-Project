import React from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import { useOutletContext } from 'react-router-dom';

function PieChartCategory(){

  const {data, AddGoalFunction, LogGoalFunction} = useOutletContext();

  // Setting initial values for each category
  let countArr = [
    { name: "daily", value: 0 },
    { name: "monthly", value: 0 },
    { name: "bucketlist", value: 0 },
    { name:"3yearplan", value: 0}
  ];

  // Using the data to update values
  for (const c of data) {
    let val = c.category;
  
    for (const i of countArr) {
      if (i.name === val) {
        i.value++;
      }
    }
  }

  return (
    <div>
      <h3>Where are my goals focus on?</h3>
      <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={countArr}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#368BC1"
            label
          />
          <Tooltip />
        <Legend verticalAlign="top" height={36} />
        </PieChart>
    </div>
  );
};

export default PieChartCategory;

