import { useOutletContext } from "react-router-dom";
import BarPlotOverTime from "../components/BarChartOverTime";
import PieChartzzz from "../components/PieChartzzz";
import { useState, useEffect } from "react";
import Dropdown from "../components/Dropdown";

function Reports() {
  let data = useOutletContext()
  
  const [newData,setNewData] = useState([])

  useEffect(() => {
    // const url = "http://localhost:4000/animals"
    const url = "http://localhost:4000/goals"
    fetch(url,
      {method: "GET",
      headers: {"Content-Type":"application/json"}
    })
    .then((res) => res.json())
    .then((dataa) => setNewData(dataa))
    .catch(error => console.error(error));
  },[])

  const fruits = ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango']; // Rough in... Use goals, and get id to filter the timeplot
  const [selectedFruit, setSelectedFruit] = useState(null);
  const handleSelect = (fruit) => {
    setSelectedFruit(fruit);
    // Do something with the selected fruit, e.g., update state or perform an action
    console.log('Selected Fruit:', fruit);
  };

    return (
      <>
        <main>
          <h1>I am the reporter
          </h1>
          <div>
          <h1>Fruit Selector</h1>
          <Dropdown options={fruits} onSelect={handleSelect} />
          <p>Selected Fruit: {selectedFruit}</p>
        </div>
          <BarPlotOverTime data={newData}/>
          <PieChartzzz data={newData} />
        </main>
      </>
    );
  };
  
  export default Reports;