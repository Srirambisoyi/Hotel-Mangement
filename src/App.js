import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HotelHeader from "./Component/HotelHeader";
import CreateHotel from "./Component/CreateHotel/CreateHotel";
import HotelList   from "./Component/GetAllHotel/getAllHOtel"

const App = () => {
    return (
        <Router>
            <HotelHeader />
            <Routes>
                <Route path="/" element={<h1>Welcome to Hotel Management</h1>} />
                <Route path="/create-hotel" element={<CreateHotel />} />
                <Route path="/getAll" element={< HotelList/>} />
                <Route path="*" element={<h1>404 - Page Not Found</h1>} />
            </Routes>
        </Router>
    );
};

export default App;
