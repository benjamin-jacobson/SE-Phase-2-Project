import Summary from "../components/Summary";
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

function AllGoals() {

  const {data, AddGoalFunction, LogGoalFunction} = useOutletContext();   // make it just this TODO get rid of useeffect

  const completedGoals = data.filter(obj => obj.completed === true);
  const incompleteGoals = data.filter(obj => obj.completed === false);

  return (
    <>
      <main>
        <h1> Summary</h1>
        <h3>Goals In Progress</h3>
        <Summary data = {incompleteGoals}/>
        <h3>Completed Goals</h3>
        <Summary data = {completedGoals}/>
      </main>
    </>
  );
};

export default AllGoals;