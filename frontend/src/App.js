import React from "react";

// Import components
import Header from "./Components/Header";
import DisplayCars from "./Components/DisplayCars";
import ListCarsForm from "./Components/ListCarsForm";
import AddCarForm from "./Components/AddCarForm";
import DeleteCarForm from "./Components/DeleteCarForm";
import UpdateCarForm from "./Components/UpdateCarForm";
import UpdateManyForm from "./Components/UpdateManyForm";

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
          year: null,
          make: "",
          model: "",
          colour: "",
          regNum: "",
          ownerName: "",
        },
      ],

      year: null,
      make: "",
      model: "",
      colour: "",
      regNum: "",
      ownerName: "",
    };

    // Binding for functions to make "this" work
    this.handleListAllCars = this.handleListAllCars.bind(this);
    this.handleListOlderCars = this.handleListOlderCars.bind(this);
    this.handleAddCar = this.handleAddCar.bind(this);
    this.handleDeleteCar = this.handleDeleteCar.bind(this);
    this.handleUpdateCar = this.handleUpdateCar.bind(this);
    this.handleUpdateMany = this.handleUpdateMany.bind(this);

    this.handleUpdateManyColour = this.handleUpdateManyColour.bind(this);
    this.handleUpdateManyOwnerName = this.handleUpdateManyOwnerName.bind(this);

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

  // Functions for updating many cars
  handleUpdateManyColour(event) {
    this.setState(
      {
        colour: event.target.value,
      },
      () => console.log("Colour to update: " + this.state.colour)
    );
  }

  handleUpdateManyOwnerName(event) {
    this.setState(
      {
        ownerName: event.target.value,
      },
      () => console.log("Name of owner: " + this.state.ownerName)
    );
  }

  handleUpdateMany(event) {
    fetch("/updateMany", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // Send new url in body of request
      body: JSON.stringify({
        colour: this.state.colour,
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
              console.log("Update many request sent. " + result.message);
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
    // End of handle update many function
  }

  // ------------------------------------------------------ //

  // function to handle when user clicks button to list all cars
  handleListAllCars(event) {
    this.setState({ isLoaded: false }, () => this.reloadResults());
  }

  // Function to handle when user clicks button to list cars older than 5 years
  handleListOlderCars(event) {
    fetch("/listOlder")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState(
            {
              isLoaded: true,
              cars: result.message,
            },
            () => {
              console.log("List older cars request sent. " + result.message);
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
  }

  // Functions to handle saving car details to state for "Update cars" form
  handleUpdateYear(event) {
    this.setState({
      year: Number(event.target.value),
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

  // Function to update a specific car's details
  handleUpdateCar(event) {
    fetch("/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
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

  // Functions for "Add car" form
  handleChangeYear(event) {
    this.setState({
      year: Number(event.target.value),
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

  // function to add car after user has filled in add car form
  handleAddCar(event) {
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
            },
            () => {
              console.log("Post request to add car sent. " + result.message);
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

  // Reload results/list of cars
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

  // Function to add name of owner to state for delete form
  handleOwnerToDelete(event) {
    this.setState(
      {
        ownerToDelete: event.target.value,
      },
      () => console.log("Owner to delete: " + this.state.ownerToDelete)
    );
  }

  // Function to use post request to delete car belonging to specific owner
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
    // End of handle delete car function
  }

  // Function to load list of cars in database when page first loads
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

            <UpdateCarForm
              handleUpdateYear={this.handleUpdateYear}
              handleUpdateMake={this.handleUpdateMake}
              handleUpdateModel={this.handleUpdateModel}
              handleUpdateColour={this.handleUpdateColour}
              handleUpdateRegNum={this.handleUpdateRegNum}
              handleUpdateOwnerName={this.handleUpdateOwnerName}
              handleUpdateCar={this.handleUpdateCar}
            />

            <UpdateManyForm
              handleUpdateMany={this.handleUpdateMany}
              handleUpdateManyOwnerName={this.handleUpdateManyOwnerName}
              handleUpdateManyColour={this.handleUpdateManyColour}
            />

            <div className="formsCol">
              <div className="formsRow">
                <ListCarsForm
                  handleListAllCars={this.handleListAllCars}
                  handleListOlderCars={this.handleListOlderCars}
                />
                <DeleteCarForm
                  handleDeleteCar={this.handleDeleteCar}
                  handleOwnerToDelete={this.handleOwnerToDelete}
                />
              </div>
              <DisplayCars carList={cars} />
            </div>
          </div>
        </div>
      );
    }
  }
}

// Export App to be imported by other files
export default App;
