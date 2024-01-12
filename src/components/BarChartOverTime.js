import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { eachDayOfInterval, format } from 'date-fns';
import { useOutletContext } from 'react-router-dom';

function BarPlotOverTime({goalToShow, goalToShowId}){

  const {data, AddGoalFunction, LogGoalFunction} = useOutletContext();

    // console.log("testsssxxxxx")
    // console.log(goalToShowId)
    const desiredObject = data.find(obj => obj.id === goalToShowId);
    // console.log(desiredObject.datesGoalMet);

    const dataFake = desiredObject.datesGoalMet.map(date => ({ date, value: 10 }));
    dataFake.sort((a, b) => new Date(a.date) - new Date(b.date));
    
    // console.log("dog")
    // console.log(dataFake);


// const startDate = new Date('2023-12-31');
const startDate = desiredObject.creationDate
const endDate = format(new Date(), 'yyyy-MM-dd')
const dateArray = eachDayOfInterval({ start: startDate, end: endDate });
console.log("yyyy")
console.log(startDate)
// console.log(endDate)
// console.log(dateArray)

function getDatesBetween(startDate, endDate) {
  const interval = { start: startDate, end: new Date(endDate) };
  console.log(interval)
  return eachDayOfInterval(interval).map(date => format(date, 'yyyy-MM-dd'));
};

const today = format(new Date(), 'yyyy-MM-dd');
const arrayOfDates = getDatesBetween(startDate, today); // using function
arrayOfDates.sort((a, b) => new Date(b.date) - new Date(a.date));
const newStuff = arrayOfDates.map(date => ({ date, value: 0 }));

newStuff.forEach(dd => {
  if (desiredObject.datesGoalMet.includes(dd.date)) {
    dd.value = 3;
  }
});

console.log(newStuff)

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

// Conditional Return 

if (dataFake.length > 0){

  return (
    <div>
    <div>
    <h2>{`Bar Plot Over Time: ${goalToShow}`}</h2>
    <BarChart width={600} height={300} data={newStuff}>
      <XAxis dataKey="date" type="category" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#8884d8" />
    </BarChart>
  </div>
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
    </div>

  )} else {return <p>There are no actions toward this goal ¯\_(ツ)_/¯</p>}
};

export default BarPlotOverTime;