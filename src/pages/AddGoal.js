
import { useOutletContext } from 'react-router-dom';
import GoalAddForm from '../components/GoalAddForm'

function AddGoal() {

  // using App outlet to get data
  
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

    //     <div className="app-container">
    //             <h1> I am the home page </h1>
    //       <div className="grid-container">
    //         <div className="grid-item"><p>Hi I am 1.</p></div>
    //         <div className="grid-item">2</div>
    //         <div className="grid-item">3</div>
    //       </div>
    //     </div>
    //   );