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
      cars: [
        {
          year: "",
          make: "",
          model: "",
          colour: "",
          regNum: "",
          ownerName: "",
        },
      ],

      year: "",
      make: "",
      model: "",
      colour: "",
      regNum: "",
      ownerName: "",
    };

    // Binding to make "this" work
    this.handleListCars = this.handleListCars.bind(this);
    this.handleAddCar = this.handleAddCar.bind(this);
    this.handleDeleteCar = this.handleDeleteCar.bind(this);
    this.handleUpdateCar = this.handleUpdateCar.bind(this);

    this.handleChangeYear = this.handleChangeYear.bind(this);
    this.handleChangeMake = this.handleChangeMake.bind(this);
    this.handleChangeModel = this.handleChangeModel.bind(this);
    this.handleChangeColour = this.handleChangeColour.bind(this);
    this.handleChangeRegNum = this.handleChangeRegNum.bind(this);
    this.handleChangeOwnerName = this.handleChangeOwnerName.bind(this);

    this.handleUpdateYear = this.handleUpdateYear.bind(this);
    this.handleUpdateMake = this.handleUpdateMake.bind(this);
    this.handleUpdateModel = this.handleUpdateModel.bind(this);
    this.handleUpdateColour = this.handleUpdateColour.bind(this);
    this.handleUpdateRegNum = this.handleUpdateRegNum.bind(this);
    this.handleUpdateOwnerName = this.handleUpdateOwnerName.bind(this);

    this.handleOwnerToDelete = this.handleOwnerToDelete.bind(this);

    this.reloadResults = this.reloadResults.bind(this);
  }

  handleListCars(event) {}

  // Functions to handle saving car details to state for "Update cars" form
  handleUpdateYear(event) {
    this.setState({
      year: event.target.value,
    });
  }

  handleUpdateMake(event) {
    this.setState({
      make: event.target.value,
    });
  }

  handleUpdateModel(event) {
    this.setState({
      model: event.target.value,
    });
  }

  handleUpdateColour(event) {
    this.setState({
      colour: event.target.value,
    });
  }

  handleUpdateRegNum(event) {
    this.setState({
      regNum: event.target.value,
    });
  }

  handleUpdateOwnerName(event) {
    this.setState({
      ownerName: event.target.value,
    });
  }

  handleUpdateCar(event) {
    fetch("/update", {
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
            },
            () => {
              console.log("Update request sent. " + result.message);
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
    // End of handle update car function
  }

  // End of functions for "Update car" form ---------------------------------------- //

  // Functions to handle saving new car details to state for "Add car" form
  handleChangeYear(event) {
    this.setState({
      year: event.target.value,
    });
  }

  handleChangeMake(event) {
    this.setState({
      make: event.target.value,
    });
  }

  handleChangeModel(event) {
    this.setState({
      model: event.target.value,
    });
  }

  handleChangeColour(event) {
    this.setState({
      colour: event.target.value,
    });
  }

  handleChangeRegNum(event) {
    this.setState({
      regNum: event.target.value,
    });
  }

  handleChangeOwnerName(event) {
    this.setState({
      ownerName: event.target.value,
    });
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
            this.setState({
              isLoaded: true,
              cars: result.message,
            });
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

  handleOwnerToDelete(event) {
    this.setState(
      {
        ownerToDelete: event.target.value,
      },
      () => console.log("Owner to delete: " + this.state.ownerToDelete)
    );
  }

  handleDeleteCar(event) {
    fetch("/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // Send new url in body of request
      body: JSON.stringify({
        ownerToDelete: this.state.ownerToDelete,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState(
            {
              isLoaded: false,
            },
            () => {
              console.log("Delete request sent. " + result.message);
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

  componentDidMount() {
    if (this.state.isLoaded === false) {
      fetch("/carList")
        .then((res) => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              cars: result.message,
            });
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
            <AddCarForm
              handleChangeYear={this.handleChangeYear}
              handleChangeMake={this.handleChangeMake}
              handleChangeModel={this.handleChangeModel}
              handleChangeColour={this.handleChangeColour}
              handleChangeRegNum={this.handleChangeRegNum}
              handleChangeOwnerName={this.handleChangeOwnerName}
              handleAddCar={this.handleAddCar}
            />
            <div className="formsCol">
              <DeleteCarForm
                handleDeleteCar={this.handleDeleteCar}
                handleOwnerToDelete={this.handleOwnerToDelete}
              />
              <UpdateCarForm
                handleUpdateYear={this.handleUpdateYear}
                handleUpdateMake={this.handleUpdateMake}
                handleUpdateModel={this.handleUpdateModel}
                handleUpdateColour={this.handleUpdateColour}
                handleUpdateRegNum={this.handleUpdateRegNum}
                handleUpdateOwnerName={this.handleUpdateOwnerName}
                handleUpdateCar={this.handleUpdateCar}
              />
            </div>

            <DisplayCars carList={cars} />
          </div>
        </div>
      );
    }
  }
}

export default App;
