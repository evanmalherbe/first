import React from "react";

// Import image
import logo from "../monkeyLogo.png";

// Import custom stylesheet
import "../App.css";

// Function to display header for page. Includes search form component
function Header(props) {
  return (
    <header className="header">
      <img src={logo} className="logoImg" alt="logo" />
      <h1>Mongo DB app</h1>
    </header>
  );
}

// Export component for use in other files
export default Header;
