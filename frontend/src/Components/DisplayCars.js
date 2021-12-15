// Import custom stylesheet
import "../App.css";

// Function to display contents of database (list of cars) on page
function DisplayCars(props) {
  let data = props.carList;

  return (
    <div className="displayCarsDiv">
      <h2>Results</h2>
      {data}
    </div>
  );
}

// Export component to be used by other files
export default DisplayCars;
