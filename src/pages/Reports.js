import { useOutletContext } from "react-router-dom";
import BarPlotOverTime from "../components/BarChartOverTime";
import { useState, useEffect } from "react";
import Dropdown from "../components/Dropdown";

function Reports() {

  const {data, AddGoalFunction, LogGoalFunction} = useOutletContext();

  const choices_goals = data.map((i) => {return i.goal}) // TODO Rough in... Use goals, and get id to filter the timeplot

  const [selectedGoal, setSelectedGoal] = useState(data[0].goal);
  const [selectedGoalId, setSelectedGoalId] = useState(data[0].id);

  const handleSelect = (g) => {
    // Setting Selected Goal and its id in state
    setSelectedGoal(g);

    const selectedGoalId = data.map((h) => {
      if (h.goal === g){
        setSelectedGoalId(h.id)
      } 
    });
  };

    return (
      <>
        <main>
          <h2>Select a goal to see actions towards it!</h2>
          <div>
          <Dropdown options={choices_goals} onSelect={handleSelect} />
        </div>
          <BarPlotOverTime data={data} goalToShow={selectedGoal} goalToShowId={selectedGoalId}/>
        </main>
      </>
    );
  };
  
  export default Reports;