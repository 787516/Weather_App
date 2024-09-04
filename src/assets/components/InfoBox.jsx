import React from "react";

function infoBox({ info }) {
  
  return (
    <div>
      <div className="infoBox mt-4">
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{info.city}</h5>
            <p className="card-text">
              Temperature: {info.temp}°C<br />
              Min Temp: {info.tempMin}°C<br />
              Max Temp: {info.tempMax}°C<br />
              Feels Like: {info.feelslike}°C<br />
              Weather: {info.weather}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default infoBox;
