import React, { useState } from "react";

function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");

  const API_URL = "http://api.openweathermap.org/data/2.5/weather";
  const API_key = "0fd99b62c645dbfa55956947f6737e40";

  const getWeatherInfo = async () => {
    try {
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_key}&units=metric`);
      let jsonResponse = await response.json();

      if (response.ok) {
        let result = {
          city: city,
          temp: jsonResponse.main.temp,
          tempMin: jsonResponse.main.temp_min,  // corrected property name
          tempMax: jsonResponse.main.temp_max, // corrected property name
          feelslike: jsonResponse.main.feels_like,
          weather: jsonResponse.weather[0].description,
        };
        console.log(result);
        updateInfo(result); // update the info in the parent component
      } else {
        prompt.error("Error fetching weather data:", jsonResponse.message);
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (city) {
      await getWeatherInfo();
      setCity("");
    }
  };

  return (
    <div>
      <h2 className="p-4">Search your city Weather</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            City
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your City"
            aria-label="city"
            aria-describedby="basic-addon1"
            value={city}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-outline-secondary btn-lg">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SearchBox;
