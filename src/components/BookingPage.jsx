import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./BookingPage.css";

const BookingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const selectedFlight = location.state.selectedFlight;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/confirmation", {
      state: {
        selectedFlight,
        formData,
      },
    });
  };

  return (
    <div>
      <h2 className="booking-heading">Booking Details</h2>
      <div className="booking-container">
        <div className="flight-details">
          <h3>Flight Details</h3>
          <p>
            <strong>Flight Number:</strong> {selectedFlight.Company} -{" "}
            {selectedFlight.Flight_ID}
          </p>
          <p>
            <strong>Departure Time:</strong> {selectedFlight["Departure Time"]}
          </p>
          <p>
            <strong>Arrival Time:</strong> {selectedFlight["Arrival Time"]}
          </p>
          <p>
            <strong>Price:</strong> {selectedFlight["Flight Price"]}
          </p>
        </div>
        <div className="user-details">
          <h3>User Details</h3>
          <form onSubmit={handleSubmit} className="booking-form">
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Phone Number:
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
              />
            </label>
            <button type="submit" className="submit-button">
              Book Flight
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
