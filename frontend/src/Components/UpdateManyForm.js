import React from "react";

// Import React Bootstrap components
import { Form, FormControl } from "react-bootstrap";
import Button from "react-bootstrap/Button";

// Import bootstrap styles
import "bootstrap/dist/css/bootstrap.min.css";

// Import custom stylesheet
import "../App.css";

// Function to display HTTP Post form to update any cars with same owner name
function UpdateManyForm(props) {
  return (
    <div className="updateManyFormDiv">
      <h2>Update Many</h2>
      <p>Update colour of all cars owned by same person</p>
      <Form>
        <div className="form-group">
          <Form.Label>
            Enter full name of car owner <b>(mandatory)</b>:
          </Form.Label>
          <FormControl
            type="text"
            id="ownerOfMany"
            placeholder="e.g. bob Hope"
            onChange={props.handleUpdateManyOwnerName}
          />
        </div>
        <div className="form-group">
          <Form.Label>Update colour:</Form.Label>
          <FormControl
            type="text"
            id="colourOfMany"
            placeholder="e.g. red"
            onChange={props.handleUpdateManyColour}
          />
        </div>

        <Button className="btn btn-primary" onClick={props.handleUpdateMany}>
          Update Cars
        </Button>
      </Form>

      {/* End of update many Form Div*/}
    </div>
  );
}

// Export component so it can be used by App.js
export default UpdateManyForm;
