// Import custom stylesheet
import "../App.css";

// Function to display search results on page
function DisplayCars(props) {
  let data = props.carList;
  //console.log("Data says: " + data.model);

  // let data = array.splice();

  // let results;

  // for (let i = 0; i <= array.length; i++) {
  //   // Add values from api to divs/list items in an array. One div for each result returned.
  //   results.push(
  //     <div className="ulListDiv" key={i}>
  //       <ul>
  //         <li>
  //           {" "}
  //           <b>Model Year:</b> {array[i].model}{" "}
  //         </li>
  //         <li>
  //           {" "}
  //           <b>Make and Model:</b> {array[i].make}{" "}
  //         </li>
  //         <li>
  //           {" "}
  //           <b>Colour:</b> {array[i].colour}{" "}
  //         </li>
  //         <li>
  //           {" "}
  //           <b>Registration:</b> {array[i].registration}{" "}
  //         </li>
  //         <li>
  //           {" "}
  //           <b>Owner name:</b> {array[i].owner}{" "}
  //         </li>
  //         <li>
  //           {" "}
  //           <b>Owner address:</b> {array[i].address}{" "}
  //         </li>
  //       </ul>
  //     </div>
  //   );

  //   // End of for loop to populate array with a div for each car
  // }

  return (
    <div className="displayCarsDiv">
      <h2>Results</h2>
      {data}
    </div>
  );
}

// Export component to be used by other files
export default DisplayCars;

// //Each result includes a button to add it as a favourite
//         <Button
//           variant="primary"
//           type="button"
//           onClick={() =>
//             this.handleFavourite(track, artist, collection, kindOfMedia)
//           }
//         >
//           Add Favourite
//         </Button>
