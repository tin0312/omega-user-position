import { useState, useEffect } from "react";
import React from "react";
import GetPosition from "./firebase/GetPosition";
import "./App.css";

function App() {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    // Define an asynchronous function to fetch and set the position
    const fetchPosition = async () => {
      // Get the path part of the URL
      const path = window.location.pathname;
      
      // Extract the value from the path
      const value = path.substring(1); // Remove the leading slash

      // Call GetPosition function and update the state with the position
      const updatedUserPosition = await GetPosition(value);
      setPosition(updatedUserPosition);
    };

    // Call the asynchronous function
    fetchPosition();
  }, []); //

  return (
    <>
      <div className="chips">
        <div className="pokerchip green"></div>
        <h1>Current position</h1>
        <h1 className="position">{position}</h1>
      </div>
    </>
  );
}

export default App;
