import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DataJson from "../data.json";
import "./HomePage.css";
const HomePage = () => {
  const navigate = useNavigate();
  const [departureCity, setDepartureCity] = useState("");
  const [destinationCity, setDestinationCity] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [tripType, setTripType] = useState("round");
  const cities = DataJson.map((flight) => flight.Origin);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      departureCity,
      destinationCity,
      departureDate,
      returnDate,
      tripType
    );
    navigate(
      `/search?departureCity=${departureCity}&destinationCity=${destinationCity}&departureDate=${departureDate}&returnDate=${returnDate}&tripType=${tripType}`
    );
  };

  const handleDepartureCityChange = (e) => {
    const value = e.target.value;
    setDepartureCity(value);
  };

  const handleDestinationCityChange = (e) => {
    const value = e.target.value;
    setDestinationCity(value);
  };

  const renderAutocompleteOptions = (cityOptions) => {
    const uniqueCities = Array.from(new Set(cityOptions));
    return uniqueCities.map((city, index) => (
      <option key={index} value={city}>
        {city}
      </option>
    ));
  };

  return (
    <div className="container">
      <div>
        <h2>Flight Booking Portal</h2>
        <form className="homeForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Departure City:</label>
            <input
              type="text"
              placeholder="From"
              value={departureCity}
              onChange={handleDepartureCityChange}
              list="departureCities"
              required
            />
            <datalist id="departureCities">
              {renderAutocompleteOptions(cities)}
            </datalist>
            <label>Destination City:</label>
            <input
              type="text"
              placeholder="To"
              value={destinationCity}
              onChange={handleDestinationCityChange}
              list="destinationCities"
              required
            />
            <datalist id="destinationCities">
              {renderAutocompleteOptions(cities)}
            </datalist>
          </div>
          <div className="form-group">
            <div>
              <label>Departure:</label>
              <input
                type="date"
                placeholder="Departure"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                required
              />
            </div>
          </div>
          <button className="searchBotton" type="submit">
            Search Flights
          </button>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
