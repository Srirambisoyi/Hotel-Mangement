import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './HotelList.css'; // Make sure to add this file for the styles

const HotelList = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch hotel data from the backend
    axios.get('http://localhost:9092/api') // Replace with your actual API URL
      .then((response) => {
        setHotels(response.data); // Save the fetched data in state
        setLoading(false); // Stop loading when data is fetched
      })
      .catch((error) => {
        setError('Error fetching hotels');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Hotel List</h1>
      {hotels.length === 0 ? (
        <p>No hotels available.</p>
      ) : (
        <table className="hotel-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Location</th>
              <th>About</th>
            </tr>
          </thead>
          <tbody>
            {hotels.map((hotel) => (
              <tr key={hotel.id}>
                <td>{hotel.id}</td>
                <td>{hotel.name}</td>
                <td>{hotel.location}</td>
                <td>{hotel.about}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default HotelList;
