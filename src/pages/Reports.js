import { useOutletContext } from "react-router-dom";
import BarPlotOverTime from "../components/BarChartOverTime";
import PieChartzzz from "../components/PieChartzzz";
import { useState, useEffect } from "react";
import Dropdown from "../components/Dropdown";

function Reports() {

  const {data, AddGoalFunction, LogGoalFunction} = useOutletContext();
  const [newData,setNewData] = useState([])


  const choices_goals = data.map((i) => {return i.goal}) // TODO Rough in... Use goals, and get id to filter the timeplot

  const [selectedGoal, setSelectedGoal] = useState(null);
  const handleSelect = (g) => {
    setSelectedGoal(g);
    // Do something with the selected fruit, e.g., update state or perform an action

  };

    return (
      <>
        <main>
          <h1>Select a goal to see actions towards ...</h1>
          <div>
          <Dropdown options={choices_goals} onSelect={handleSelect} />
        </div>
          <BarPlotOverTime data={newData} goalToShow={selectedGoal}/>
          {/* <PieChartzzz data={newData} /> */}
        </main>
      </>
    );
  };
  
  export default Reports;