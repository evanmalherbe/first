import React from "react";

// Import React Bootstrap components
import Button from "react-bootstrap/Button";

// Import bootstrap styles
import "bootstrap/dist/css/bootstrap.min.css";

// Import custom stylesheet
import "../App.css";

// Create function to display HTTP Post form in header
function ListCarsForm(props) {
  return (
    <div className="listCarsFormDiv">
      <h2>List</h2>
      <Button variant="primary" type="button" onClick={props.handleListCars}>
        List All Cars
      </Button>

      {/* End of listFormDiv*/}
    </div>
  );
}

// Export component so it can be used by App.js
export default ListCarsForm;
