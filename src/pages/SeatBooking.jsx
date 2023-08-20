import React from "react";
import { useEffect } from "react";
import SearchBoxArea from "../components/molecules/SearchBoxArea";
import NavBar from "../components/molecules/NavBar";
import TopBar from "../components/molecules/TopBar";
import GridItems from "../components/molecules/grid_1";
import "./pages.css"

const SeatBooking = (props) => {
    useEffect(() => {
        let TimeOut;

        document.getElementById("tour-main-container").addEventListener("click", function(event) {
            console.log("Clicked");
            if (event.target.tagName === "BUTTON") {
                console.log("Button clicked");
                let containerHeight = "40vh";
                var x = event.target.parentElement.parentElement.firstElementChild.getElementsByClassName("tour-seat-container")[0];
                if (x.style.maxHeight === containerHeight ) {
                    console.log("Closing");
                    x.style.maxHeight = "0px";
                    
                    x.addEventListener("transitionend", function() {
                        event.target.innerHTML = "expand_more";
                        x.style.display = "none";
                    }, {once: true});
                
                } else {
                    console.log("Opening");
                    x.style.display = "block";
                    
                    TimeOut = setTimeout(function() {
                        x.style.maxHeight = containerHeight;
                        event.target.innerHTML = "expand_less";
                    }, 0);
                }
            }
        });

        return () => {
            console.log('Cleanup function called');
            clearTimeout(TimeOut);
            // Code to clean up any resources or event listeners created by the effect
          };
    }, []);

      
    return (
        <div className="App">
            <TopBar> <div className="titleTopBar">
                <h1>Seat</h1>
            </div></TopBar>
            <div className="searchBoxArea">
                <SearchBoxArea />
            </div>

            <div id="tour-main-container">

                <div className="tour-container">
                    <div className="tour-detail-container">
                        <div className="tour-title">Mars Spaceline</div>
                        <div className="tour-details">
                            <div className="tour-place">Earth</div>
                            <div className="tour-hr"><hr/></div>
                            <div className="tour-place">Moon</div>
                            <div className="tour-time">00:15 <br/> 26 Aug 2123</div>
                            <div className="tour-stops"></div>
                            <div className="tour-time">00:15 <br/> 26 Aug 2126</div>
                        </div>
                        <GridItems id = "t0" seatAvailability = {[0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0]}/>
                    </div>
                    <div className="tour-btn-container">
                        <button className="tour-btn-sm material-symbols-outlined">
                            expand_more
                        </button>
                    </div>
                </div>

                <div className="tour-container">
                    <div className="tour-detail-container">
                        <div className="tour-title">Mars Spaceline</div>
                        <div className="tour-details">
                            <div className="tour-place">Earth</div>
                            <div className="tour-hr"><hr/></div>
                            <div className="tour-place">Moon</div>
                            <div className="tour-time">00:15 <br/> 26 Aug 2123</div>
                            <div className="tour-stops"></div>
                            <div className="tour-time">00:15 <br/> 26 Aug 2126</div>
                        </div>
                        <GridItems id = "t1" seatAvailability = {[0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0]}/>
                    </div>
                    <div className="tour-btn-container">
                        <button className="tour-btn-sm material-symbols-outlined">
                            expand_more
                        </button>
                    </div>
                </div>

                <div className="tour-container">
                    <div className="tour-detail-container">
                        <div className="tour-title">Mars Spaceline</div>
                        <div className="tour-details">
                            <div className="tour-place">Earth</div>
                            <div className="tour-hr"><hr/></div>
                            <div className="tour-place">Moon</div>
                            <div className="tour-time">00:15 <br/> 26 Aug 2123</div>
                            <div className="tour-stops"></div>
                            <div className="tour-time">00:15 <br/> 26 Aug 2126</div>
                        </div>
                        <GridItems id = "t2" seatAvailability = {[1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0]}/>
                    </div>
                    <div className="tour-btn-container">
                        <button className="tour-btn-sm material-symbols-outlined">
                            expand_more
                        </button>
                    </div>
                </div>
            </div>


            <div className="NavBar">
                <NavBar/>
            </div>
    </div>   
    );
};

export default SeatBooking;