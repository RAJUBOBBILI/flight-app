import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DataJson from "../data.json";
import "./SearchResultsPage.css";

const SearchResultsPage = () => {
  const location = useLocation();
  const [flights, setFlights] = useState([]);
  const queryParams = new URLSearchParams(location.search);

  const departureCity = queryParams.get("departureCity");
  const destinationCity = queryParams.get("destinationCity");
  const departureDate = queryParams.get("departureDate");
  const mainData = DataJson;
  const formattedDate = departureDate.split("-").reverse().join("-");
  const navigate = useNavigate();

  const handleBookNowClick = (selectedFlight) => {
    navigate("/booking", { state: { selectedFlight } });
  };

  useEffect(() => {
    const filteredFlights = mainData.filter((flight) => {
      return (
        flight.Origin === departureCity &&
        flight.Destination === destinationCity &&
        flight.Date === formattedDate
      );
    });
    setFlights(filteredFlights);
  }, [departureCity, destinationCity, formattedDate, mainData]);

  const handleBackButtonClick = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="homeSearch">
        <div>
          <h2 className="search-heading">Searched Flights Results</h2>
          <div className="containerSearch">
            <div className="flights-list">
              {flights.length === 0 ? (
                <div>No flights are available</div>
              ) : (
                <table>
                  <thead>
                    <tr>
                      <th>Company - Flight ID</th>
                      <th>Departure Time</th>
                      <th>Arrival Time</th>
                      <th>Flight Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {flights.map((flight, index) => (
                      <tr key={index} className="flight-item">
                        <td>
                          {flight.Company} - {flight.Flight_ID}
                        </td>
                        <td>{flight["Departure Time"]}</td>
                        <td>{flight["Arrival Time"]}</td>
                        <td>{flight["Flight Price"]}</td>
                        <td>
                          <button onClick={() => handleBookNowClick(flight)}>
                            Book Now
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
          <button className="back-button" onClick={handleBackButtonClick}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchResultsPage;
