import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = ({ cities, setCity, handleCityChange }) => {
  // console.log("cities", { cities });
  return (
    <div class="menu-container">
      <Button
        variant={`${setCity == null ? "outline-warning" : "warning"}`}
        onClick={() => handleCityChange("current")}
      >
        Current Location
      </Button>{" "}
      {cities.map((item, index) => (
        <Button
          variant={`${setCity == item ? "outline-warning" : "warning"}`}
          key={index}
          onClick={() => setCity(item)}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
