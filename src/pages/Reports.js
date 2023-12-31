import { useOutletContext } from "react-router-dom";
import BarPlotOverTime from "../components/BarChartOverTime";
import PieChartzzz from "../components/PieChartzzz";
import { useState, useEffect } from "react";

function Reports() {
  let data = useOutletContext()
  
  const [newData,setNewData] = useState([])
  useEffect(() => {
    const url = "http://localhost:4000/animals"
    fetch(url,
      {method: "GET",
      headers: {"Content-Type":"application/json"}
    })
    .then((res) => res.json())
    .then((dataa) => setNewData(dataa))
    .catch(error => console.error(error));
  },[])

    return (
      <>
        <main>
          <h1>I am the reporter
          </h1>
          <BarPlotOverTime />
          <PieChartzzz data={newData} />
        </main>
      </>
    );
  };
  
  export default Reports;