import Summary from "../components/Summary";
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

function AllGoals() {

  const {data, AddGoalFunction, LogGoalFunction} = useOutletContext();   // make it just this TODO get rid of useeffect

  return (
    <>
      <main>
        <h1> I am the goal machine. 
        </h1>
        <Summary data = {data}/>
        
      </main>
    </>
  );
};

export default AllGoals;