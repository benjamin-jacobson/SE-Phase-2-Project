import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { eachDayOfInterval, format } from 'date-fns';
import { useOutletContext } from 'react-router-dom';

function BarPlotOverTime({goalToShow, goalToShowId}){

  // Getting data 
  const {data, AddGoalFunction, LogGoalFunction} = useOutletContext();

  // Selecting Goal to show
  const goalSelectedObject = data.find(obj => obj.id === goalToShowId);

  const goalSelectedObjectFakeValues = goalSelectedObject.datesGoalMet.map(date => ({ date, value: 10 }));
  goalSelectedObjectFakeValues.sort((a, b) => new Date(a.date) - new Date(b.date));
    

  // Function for prepraring the array of objects for recharts data layout
  function getDatesBetween(startDate, endDate) {
    const interval = { start: startDate, end: new Date(endDate) }; // TODO fix the 1 day issue
    return eachDayOfInterval(interval).map(date => format(date, 'yyyy-MM-dd'));
  };

  const startDate = goalSelectedObject.creationDate
  const today = format(new Date(), 'yyyy-MM-dd');
  const arrayOfDates = getDatesBetween(startDate, today); // using function
  arrayOfDates.sort((a, b) => new Date(b.date) - new Date(a.date)); // sorting
  const arrayOfDatesWithValues = arrayOfDates.map(date => ({ date, value: 0 })); // adding 0 value

  // If datesGoalMet, setting to a fake value 3
  arrayOfDatesWithValues.forEach(dd => {
    if (goalSelectedObject.datesGoalMet.includes(dd.date)) {
      dd.value = 3;
    }
  });

console.log(arrayOfDatesWithValues)

if (goalSelectedObjectFakeValues.length > 0){

  return (
    <div>
    <div>
    <h2>{`Bar Plot Over Time: ${goalToShow}`}</h2>
    <BarChart width={600} height={300} data={arrayOfDatesWithValues}>
      <XAxis dataKey="date" type="category" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#8884d8" />
    </BarChart>
  </div>
    <div>
      <h2>{`Bar Plot Over Time: ${goalToShow}`}</h2>
      <BarChart width={600} height={300} data={goalSelectedObjectFakeValues}>
        <XAxis dataKey="date" type="category" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </div>
    </div>

  )} else {
    return <p>There are no actions toward this goal ¯\_(ツ)_/¯</p>
  }
};

export default BarPlotOverTime;