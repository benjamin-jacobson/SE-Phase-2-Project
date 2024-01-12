
import { useOutletContext } from 'react-router-dom';
import GoalAddForm from '../components/GoalAddForm'

function AddGoal() {
  
    return (
      <>
        <main>
          <h1>Add a goal!
          </h1>
          <GoalAddForm />
        </main>
      </>
    );
  };
  
  export default AddGoal;