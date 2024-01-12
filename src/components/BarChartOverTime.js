import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { eachDayOfInterval, format } from 'date-fns';
import { useOutletContext } from 'react-router-dom';

function BarPlotOverTime({goalToShow, goalToShowId}){

  const {data, AddGoalFunction, LogGoalFunction} = useOutletContext();

    console.log("testsssxxxxx")
    console.log(goalToShowId)
    const desiredObject = data.find(obj => obj.id === goalToShowId);
    console.log(desiredObject.datesGoalMet);

    const dataFake = desiredObject.datesGoalMet.map(date => ({ date, value: 10 }));
    dataFake.sort((a, b) => new Date(a.date) - new Date(b.date));
    
    console.log("dog")
    console.log(dataFake);


// // const startDate = new Date('2023-12-31');
// const startDate = desiredObject.datesGoalMet[0]
// const endDate = new Date();

// const dateArray = eachDayOfInterval({ start: startDate, end: endDate });
// const formattedDateArray = dateArray.map(date => format(date, 'yyyy-MM-dd'));
// const dataFake2 = formattedDateArray.map(date => ({ date, value: 0 }));
// dataFake2.sort((a, b) => new Date(a.date) - new Date(b.date));
// console.log("nnnnenenen")
// console.log(dataFake2);

// for (const d of desiredObject.datesGoalMet) {
//   const updatedArray = dataFake2.map(obj => {
//     if (obj.date === d) {
//       return { ...obj, value: 1 };
//     }
//     return obj;
//   });
// }

if (dataFake.length > 0){
  return (
    <div>

      <h2>{`Bar Plot Over Time: ${goalToShow}`}</h2>
      <BarChart width={600} height={300} data={dataFake}>
        <XAxis dataKey="date" type="category" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </div>
  )} else {return <p>There are no actions toward this goal ¯\_(ツ)_/¯</p>}
};

export default BarPlotOverTime;