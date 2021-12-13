import React from "react";

// Import React Bootstrap components
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";

// Import bootstrap styles
import "bootstrap/dist/css/bootstrap.min.css";

// Import custom stylesheet
import "../App.css";

// Create function to display HTTP Post form in header
function UpdateCarForm(props) {
  return (
    <div className="updateCarFormDiv">
      <h2>Update</h2>
      <Form>
        <div className="form-group">
          <Form.Select name="updateCar" onChange={props.handleChangeCar}>
            <option value="all">Choose Car</option>
          </Form.Select>
        </div>
        <div className="form-group">
          <Button
            variant="primary"
            type="button"
            onClick={props.handleUpdateCar}
          >
            Update Car
          </Button>
        </div>
      </Form>

      {/* End of updateCarFormDiv*/}
    </div>
  );
}

// Export component so it can be used by App.js
export default UpdateCarForm;
