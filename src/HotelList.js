import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './HotelList.css';  // Import the CSS file

const HotelList = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:9092/api')  
      .then(response => setHotels(response.data))
      .catch(error => console.error('Error fetching hotels:', error));
  }, []);

  return (
    <div>
      <h1>Hotel List</h1>
      <ul>
        {hotels.map((hotel) => (
          <li key={hotel.id}>{hotel.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default HotelList;
