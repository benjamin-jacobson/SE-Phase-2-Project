
import { useOutletContext } from 'react-router-dom';
import GoalLogForm from '../components/GoalLogForm';

function LogGoal() {

  // using App outlet to get data
  
    return (
      <>
        <main>
          <h1>Log Goal Here:
          </h1>
          <GoalLogForm />
        </main>
      </>
    );
  };
  
  export default LogGoal;