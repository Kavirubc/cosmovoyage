import React from "react";
import SearchBoxArea from "../components/molecules/SearchBoxArea";
import NavBar from "../components/molecules/NavBar";

const SeatBooking = () => {
    return (
    <div>
            <SearchBoxArea/>
            <div className="NavBar">
                <NavBar/>
            </div>
    </div>   
    );
    }

export default SeatBooking;