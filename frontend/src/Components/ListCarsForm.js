import React from "react";

// Import React Bootstrap components
import Button from "react-bootstrap/Button";

// Import bootstrap styles
import "bootstrap/dist/css/bootstrap.min.css";

// Import custom stylesheet
import "../App.css";

// Function to display buttons to list all cars or only cars older than 5 years
function ListCarsForm(props) {
  return (
    <div className="listCarsButtonsDiv">
      <h2>List</h2>
      <p>
        Click button to list model, make, registration and current owner for all
        cars older than 5 years{" "}
      </p>
      <div className="form-group">
        <Button
          variant="primary"
          type="button"
          onClick={props.handleListOlderCars}
        >
          List Older Cars
        </Button>
      </div>
      <div className="form-group">
        <Button
          variant="primary"
          type="button"
          onClick={props.handleListAllCars}
        >
          List All Cars
        </Button>
      </div>

      {/* End of listFormDiv*/}
    </div>
  );
}

// Export component so it can be used by App.js
export default ListCarsForm;
