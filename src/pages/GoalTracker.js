import Summary from "../components/Summary";
import { useOutletContext } from "react-router-dom";

function GoalTracker() {
  let data = useOutletContext()
  console.log(data)
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

export default GoalTracker;