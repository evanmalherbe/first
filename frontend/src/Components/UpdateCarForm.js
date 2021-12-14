import React from "react";

// Import React Bootstrap components
import { Form, FormControl } from "react-bootstrap";
import Button from "react-bootstrap/Button";

// Import bootstrap styles
import "bootstrap/dist/css/bootstrap.min.css";

// Import custom stylesheet
import "../App.css";

// Function to display HTTP Post form to update details of a particular car in database
function UpdateCarForm(props) {
  return (
    <div className="updateCarFormDiv">
      <h2>Update</h2>
      <Form>
        <div className="form-group">
          <Form.Label>
            Enter full name of car owner <b>(mandatory)</b>:
          </Form.Label>
          <FormControl
            type="text"
            id="owner"
            placeholder="e.g. bob Hope"
            onChange={props.handleUpdateOwnerName}
          />
        </div>
        <div className="form-group">
          <Form.Label>Update car model year:</Form.Label>
          <FormControl
            type="text"
            id="year"
            placeholder="e.g. 2005"
            onChange={props.handleUpdateYear}
          />
        </div>
        <div className="form-group">
          <Form.Label>Update car make:</Form.Label>
          <FormControl
            type="text"
            id="make"
            placeholder="e.g. Toyota"
            onChange={props.handleUpdateMake}
          />
        </div>
        <div className="form-group">
          <Form.Label>Update car model:</Form.Label>
          <FormControl
            type="text"
            id="model"
            placeholder="e.g. Corolla"
            onChange={props.handleUpdateModel}
          />
        </div>
        <div className="form-group">
          <Form.Label>Update colour:</Form.Label>
          <FormControl
            type="text"
            id="colour"
            placeholder="e.g. red"
            onChange={props.handleUpdateColour}
          />
        </div>
        <div className="form-group">
          <Form.Label>Update registration number:</Form.Label>
          <FormControl
            type="text"
            id="regNum"
            placeholder="e.g. NU 20204"
            onChange={props.handleUpdateRegNum}
          />
        </div>

        <Button className="btn btn-primary" onClick={props.handleUpdateCar}>
          Update Car
        </Button>
      </Form>

      {/* End of updateCarFormDiv*/}
    </div>
  );
}

// Export component so it can be used by App.js
export default UpdateCarForm;
