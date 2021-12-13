import React from "react";

// Import bootstrap styles
import "bootstrap/dist/css/bootstrap.min.css";

// Import React Bootstrap components
import { Form, FormControl } from "react-bootstrap";
import Button from "react-bootstrap/Button";

// Import custom stylesheet
import "../App.css";

// Create function to display HTTP Post form in header
function AddCarForm(props) {
  return (
    <div className="saveCarFormDiv">
      <h2>Add</h2>
      <Form>
        <div className="form-group">
          <Form.Label>Enter car model year:</Form.Label>
          <FormControl
            type="text"
            id="year"
            placeholder="e.g. 2005"
            onChange={props.handleYearChange}
          />
        </div>
        {/* <div className="form-group">
          <Form.Label>Enter car make:</Form.Label>
          <FormControl type="text" id="make" placeholder="e.g. Toyota" />
        </div>
        <div className="form-group">
          <Form.Label>Enter car model:</Form.Label>
          <FormControl type="text" id="model" placeholder="e.g. Corolla" />
        </div>
        <div className="form-group">
          <Form.Label>Enter colour:</Form.Label>
          <FormControl type="text" id="colour" placeholder="e.g. red" />
        </div>
        <div className="form-group">
          <Form.Label>Enter registration number:</Form.Label>
          <FormControl type="text" id="reg" placeholder="e.g. NU 20204" />
        </div>
        <div className="form-group">
          <Form.Label>Enter full name of current owner:</Form.Label>
          <FormControl type="text" id="owner" placeholder="e.g. bob Hope" />
        </div> */}

        <Button className="btn btn-primary" onClick={props.handleAddCar}>
          Add Car
        </Button>
      </Form>

      {/* End of AddCarFormDiv*/}
    </div>
  );
}

// Export component so it can be used by App.js
export default AddCarForm;
