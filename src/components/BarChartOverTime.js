import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

import { eachDayOfInterval, format } from 'date-fns';

function BarPlotOverTime({data}){
  // Fake data and array of dates
  const dataFake = [
    { date: "2023-01-01", value: 10 },
    { date: "2023-02-01", value: 20 },
    { date: "2023-03-01", value: 15 },
    { date: "2023-04-01", value: 25 },
  ];



const startDate = new Date('2023-12-31');
const endDate = new Date();

const dateArray = eachDayOfInterval({ start: startDate, end: endDate });
const formattedDateArray = dateArray.map(date => format(date, 'yyyy-MM-dd'));

console.log(formattedDateArray);

  return (
    <div>
      <h2>Bar Plot Over Time</h2>
      <BarChart width={600} height={300} data={dataFake}>
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