import React from "react";
import { useEffect, useState } from "react";
import "./grid.css";

const GridItems = (props) => {
    const [seatAvailability, setSeatAvailability] = useState(Array(36).fill(0));
    const [id, setId] = useState(0);
    
    useEffect(() => {
        if (props.seatAvailability !== undefined) {
            setSeatAvailability(props.seatAvailability);
        }
        if (props.id !== undefined) {
            setId(props.id);
        }
    }, [props.seatAvailability, props.id]);

    useEffect(() => {
        let seatList = document.getElementById(id).getElementsByClassName("seat");
        for (let i = 0; i < seatAvailability.length; i++) {
        if (seatAvailability[i] === 0) {
            seatList[i].classList.add("booked");
            seatList[i].disabled = true;
        }else{
            seatList[i].classList.remove("booked");
            seatList[i].disabled = false;
        }
        }
    }, [seatAvailability, id]);

    return (
        <div className="tour-seat-container" id={id}>
            <div className="grid-container">
                <div className="grid-item">
                    <input type="checkbox" className="seat"/>
                </div>
                <div className="grid-item">
                    <input type="checkbox" className="seat"/>
                </div>
                <div className="grid-item">
                    <input type="checkbox" className="seat"/>
                </div>
                <div className="grid-item">
                    <input type="checkbox" className="seat"/>
                </div>
                <div className="grid-item">
                    <input type="checkbox" className="seat"/>
                </div>
                <div className="grid-item">
                    <input type="checkbox" className="seat"/>
                </div>
                <div className="grid-item">
                    <input type="checkbox" className="seat"/>
                </div>
                <div className="grid-item">
                    <input type="checkbox" className="seat"/>
                </div>
                <div className="grid-item">
                    <input type="checkbox" className="seat"/>
                </div>
                <div className="grid-item">
                    <input type="checkbox" className="seat"/>
                </div>
                <div className="grid-item">
                    <input type="checkbox" className="seat"/>
                </div>
                <div className="grid-item">
                    <input type="checkbox" className="seat"/>
                </div>
                <div className="grid-item">
                    <input type="checkbox" className="seat"/>
                </div>
                <div className="grid-item">
                    <input type="checkbox" className="seat"/>
                </div>
                <div className="grid-item">
                    <input type="checkbox" className="seat"/>
                </div>
                <div className="grid-item">
                    <input type="checkbox" className="seat"/>
                </div>
                <div className="grid-item">
                    <input type="checkbox" className="seat"/>
                </div>
                <div className="grid-item">
                    <input type="checkbox" className="seat"/>
                </div>
                <div className="grid-item">
                    <input type="checkbox" className="seat"/>
                </div>
                <div className="grid-item">
                    <input type="checkbox" className="seat"/>
                </div>
                <div className="grid-item">
                    <input type="checkbox" className="seat"/>
                </div>
                <div className="grid-item">
                    <input type="checkbox" className="seat"/>
                </div>
                <div className="grid-item">
                    <input type="checkbox" className="seat"/>
                </div>
                <div className="grid-item">
                    <input type="checkbox" className="seat"/>
                </div>
                <div className="grid-item">
                    <input type="checkbox" className="seat"/>
                </div>
                <div className="grid-item">
                    <input type="checkbox" className="seat"/>
                </div>
                <div className="grid-item">
                    <input type="checkbox" className="seat"/>
                </div>
                <div className="grid-item">
                    <input type="checkbox" className="seat"/>
                </div>
                <div className="grid-item">
                    <input type="checkbox" className="seat"/>
                </div>
                <div className="grid-item">
                    <input type="checkbox" className="seat"/>
                </div>
                <div className="grid-item">
                    <input type="checkbox" className="seat"/>
                </div>
                <div className="grid-item">
                    <input type="checkbox" className="seat"/>
                </div>
                <div className="grid-item">
                    <input type="checkbox" className="seat"/>
                </div>
                <div className="grid-item">
                    <input type="checkbox" className="seat"/>
                </div>
                <div className="grid-item">
                    <input type="checkbox" className="seat"/>
                </div>
                <div className="grid-item">
                    <input type="checkbox" className="seat"/>
                </div>

            </div>
            <input type="submit" className="tour-submit" value="Select Seats"/>
        </div>
    );
}

export default GridItems;