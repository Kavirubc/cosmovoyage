import React from "react";
import SearchBoxArea from "../components/molecules/SearchBoxArea";
import NavBar from "../components/molecules/NavBar";
import TopBar from "../components/molecules/TopBar";
import gridItems from "../components/molecules/grid_1.jsx";

const SeatBooking = () => {
    return (
    <div>
            <TopBar> <div className="titleTopBar">
                <h1>Seat</h1>
            </div></TopBar>
            <div className="searchBoxArea">
                <SearchBoxArea />
            </div>
            <div className="grid">
                <gridItems/>
            </div>
            <div className="NavBar">
                <NavBar/>
            </div>
    </div>   
    );
    }

export default SeatBooking;