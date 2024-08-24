// src/Weather.js
import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  const apiKey = `091eb91fbbd80a33c130e8cf76422f22`;

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeatherData(response.data);
      setError("");
    } catch (error) {
      setError("City not found");
      setWeatherData(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
  };

  return (
    <div className="weather-container">
      <div className="box">
        <h1 className="weather-title">Weather App</h1>

        <form onSubmit={handleSubmit}>
          <div className="search-inp">
            {" "}
            <input
              type="text"
              placeholder="Enter City Name"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="weather-input"
            />
            
          </div>

          <button type="submit" className="weather-button">
            Search
          </button>
        </form>
        {error && <div className="weather-info">{error}</div>}
        {weatherData && (
          <div className="weather-info">
            <h2>
              {weatherData.name}, {weatherData.sys.country}
            </h2>
            <p>Temperature: {weatherData.main.temp}°C</p>
            <p>Weather: {weatherData.weather[0].main}</p>
            <p>Humidity: {weatherData.main.humidity}%</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;