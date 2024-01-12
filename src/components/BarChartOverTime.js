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


  // // Fake data and array of dates
  // const dataFake = [   //// Need to convert the goal to this
  //   { date: "2023-01-01", value: 10 },
  //   { date: "2023-01-02", value: 10 },
  //   { date: "2023-01-03", value: 10 },
  //   { date: "2023-01-04", value: 10 },
  //   { date: "2023-01-18", value: 10 },
  //   { date: "2023-01-19", value: 10 },
  //   { date: "2023-02-01", value: 20 },
  //   { date: "2023-03-01", value: 15 },
  //   { date: "2023-04-01", value: 25 },
  //   { date: "2023-04-02", value: 0 },
  //   { date: "2023-04-03", value: 0 },
  //   { date: "2023-04-05", value: 25 },
  //   { date: "2023-04-04", value: 25 },
  // ];
  



const startDate = new Date('2023-12-31');
const endDate = new Date();

const dateArray = eachDayOfInterval({ start: startDate, end: endDate });
const formattedDateArray = dateArray.map(date => format(date, 'yyyy-MM-dd'));
console.log("nnnnenenen")
console.log(formattedDateArray);

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