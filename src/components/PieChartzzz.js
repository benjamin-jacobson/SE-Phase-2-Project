import React from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

function PieChartzzz({data}){

  let countArr = [
    { name: "daily", value: 1 },
    { name: "monthly", value: 1 },
    { name: "bucketlist", value: 1 },
    { name:"3yearplan", value: 1}
  ];
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
      <h2>Pie Chart</h2>
      <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={countArr}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        <Legend verticalAlign="top" height={36} />
        </PieChart>
    </div>
  );
};

export default PieChartzzz;

