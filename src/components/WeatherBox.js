import React from "react";

const WeatherBox = ({ weather }) => {
  console.log("weather", weather);
  return (
    <div>
      <div className="weather-box">
        <h3>{weather && weather.name}</h3>
        {/* <h3>{weather?.name}</h3> */}
        <h1>
          {weather?.main.temp}도/ {weather?.main.temp * 1.8 + 32}화씨
        </h1>
        <h2>{weather?.weather[0].description}</h2>
      </div>
    </div>
  );
};

export default WeatherBox;
