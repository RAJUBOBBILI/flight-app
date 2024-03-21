import React from "react";
import { useLocation } from "react-router-dom";
import "./ConfirmationPage.css";

const ConfirmationPage = () => {
  const location = useLocation();
  const { selectedFlight, formData } = location.state;

  return (
    <div>
      <h2 className="confirmation-heading">Confirmation</h2>
      <div className="confirmation-container">
        <div className="booking-details">
          <h3>Booking Details</h3>
          <p>
            <strong>Name:</strong> {formData.name}
          </p>
          <p>
            <strong>Email:</strong> {formData.email}
          </p>
          <p>
            <strong>Phone Number:</strong> {formData.phoneNumber}
          </p>
        </div>
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
        <button>Download Ticket</button>
      </div>
    </div>
  );
};

export default ConfirmationPage;
