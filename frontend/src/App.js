import React from "react";

// Import components
import Header from "./Components/Header";
import DisplayCars from "./Components/DisplayCars";
import ListCarsForm from "./Components/ListCarsForm";
import AddCarForm from "./Components/AddCarForm";
import DeleteCarForm from "./Components/DeleteCarForm";
import UpdateCarForm from "./Components/UpdateCarForm";

// Import Bootstrap styles
import "bootstrap/dist/css/bootstrap.min.css";

// Import custom stylesheet
import "./App.css";

// Main class component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Declare state variables
      error: null,
      isLoaded: false,
      cars: [],

      year: "2001",
      make: "Hyundai",
      model: "i10",
      colour: "silver",
      regNum: "NU20190",
      ownerName: "Shala Meth",

      postFormData: {
        year: "",
        make: "",
        model: "",
        colour: "",
        regNum: "",
        ownerName: "",
      },
    };

    // Binding to make "this" work
    this.handleListCars = this.handleListCars.bind(this);
    this.handleAddCar = this.handleAddCar.bind(this);
    this.handleDeleteCar = this.handleDeleteCar.bind(this);
    this.handleUpdateCar = this.handleUpdateCar.bind(this);

    this.handleYearChange = this.handleYearChange.bind(this);
    this.reloadResults = this.reloadResults.bind(this);
  }

  handleListCars(event) {}

  handleYearChange(event) {
    this.setState({ year: event.target.value }, () =>
      console.log("Car year is: " + this.state.year)
    );
  }

  handleAddCar(event) {
    console.log("Submitted form");

    fetch("/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // Send new url in body of request
      body: JSON.stringify({
        year: this.state.year,
        make: this.state.make,
        model: this.state.model,
        colour: this.state.colour,
        regNum: this.state.regNum,
        ownerName: this.state.ownerName,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState(
            {
              isLoaded: false,
              //cars: result.message,
            },
            () => {
              console.log("Post request sent. " + result.message);
              this.reloadResults();
            }
          );
        },
        (error) => {
          this.setState({
            isLoaded: false,
            error,
          });
        }
      );
    // End of handleaddcar function
  }

  reloadResults() {
    if (this.state.isLoaded === false) {
      console.log("Reload results has run.");

      fetch("/carList")
        .then((res) => res.json())
        .then(
          (result) => {
            this.setState(
              {
                isLoaded: true,
                cars: result.message,
              },
              () => {
                //console.log("Car data from backend is: " + this.state.cars);
              }
            );
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error,
            });
          }
        );

      // End of if statement to check if list of cars has been loaded yet.
    }
  }

  handleDeleteCar(event) {}

  handleUpdateCar(event) {}

  componentDidMount() {
    if (this.state.isLoaded === false) {
      fetch("/carList")
        .then((res) => res.json())
        .then(
          (result) => {
            this.setState(
              {
                isLoaded: true,
                cars: result.message,
              },
              () => {
                //console.log("Car data from backend is: " + this.state.cars);
              }
            );
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error,
            });
          }
        );

      // End of if statement to check if list of cars has been loaded yet.
    }
  }

  render() {
    const { error, isLoaded, cars } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="app">
          <Header />
          <div className="formsRow">
            <div className="formsCol">
              <ListCarsForm handleListCars={this.handleListCars} />
              <DeleteCarForm handleDeleteCar={this.handleDeleteCar} />
              <UpdateCarForm handleUpdateCar={this.handleUpdateCar} />
            </div>
            <AddCarForm
              handleYearChange={this.handleYearChange}
              handleAddCar={this.handleAddCar}
            />
            <DisplayCars carsData={cars} />
          </div>
        </div>
      );
    }
  }
}

export default App;
