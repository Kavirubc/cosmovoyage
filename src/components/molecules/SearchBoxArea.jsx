import React from "react";
import SearchBox from "../atoms/SearchBox";
import "./molecules.css";

//this is for the search box and the button
const SearchBoxArea = () => {
    return (
        <div className="searchBoxArea">
            <div className="searchDestination">
                <SearchBox/>
            </div>
        </div>
    );
    }

export default SearchBoxArea;