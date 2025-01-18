import React, { useState } from "react";
import axios from "axios";

const CreateHotel = () => {
  const [hotelName, setHotelName] = useState("");
  const [hotelLocation, setHotelLocation] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [hotelAbout, setHotelAbout] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const hotelData = {
      name: hotelName,
      location: hotelLocation,
      about:hotelAbout
    };

    try {
      const response = await axios.post("http://localhost:9092/api", hotelData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Show success message
      setResponseMessage(`Hotel created successfully: ${response.data.name}`);
      setHotelName("");
      setHotelLocation("");
      setHotelAbout("");
    } catch (error) {
      console.error("Error creating hotel:", error);
      setResponseMessage("Failed to create hotel. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Create Hotel</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="name">Hotel Name:</label>
          <input
            type="text"
            id="name"
            value={hotelName}
            onChange={(e) => setHotelName(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="location">Hotel Location:</label>
          <input
            type="text"
            id="location"
            value={hotelLocation}
            onChange={(e) => setHotelLocation(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
  <label htmlFor="about">About the Hotel:</label>
  <textarea
    id="about"
    value={hotelAbout}
    onChange={(e) => setHotelAbout(e.target.value)}
    style={styles.input}
    required
  />
</div>

        <button type="submit" style={styles.button}>
          Create Hotel
        </button>
      </form>
      {responseMessage && <p style={styles.responseMessage}>{responseMessage}</p>}
    </div>
  );
};

// Simple inline styles for the component
const styles = {
  container: {
    maxWidth: "500px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  formGroup: {
    marginBottom: "15px",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  responseMessage: {
    marginTop: "15px",
    fontSize: "16px",
    color: "#007BFF",
  },
};

export default CreateHotel;
