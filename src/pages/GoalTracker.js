import Summary from "../components/Summary";
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

function GoalTracker() {
  // let data = useOutletContext()
  const [data2, setData2] = useState([])
  useEffect(() => {
    const url = "http://localhost:4000/goals"
    fetch(url,
      {method: "GET",
      headers: {"Content-Type":"application/json"}
    })
    .then((res) => res.json())
    .then((dataa) => setData2(dataa))
    .catch(error => console.error(error));
  },[])

  return (
    <>
      <main>
        <h1> I am the goal machine. 
        </h1>
        <Summary data = {data2}/>
        
      </main>
    </>
  );
};

export default GoalTracker;