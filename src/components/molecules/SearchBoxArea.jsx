import React from "react";
import SearchBox from "../atoms/SearchBox";

//this is for the search box and the button
const SearchBoxArea = () => {
    return (
        <div className="searchBoxArea">
            <div className="search1">
                <SearchBox />
            </div>
            <div className="search2">
            <SearchBox />
            </div>
        </div>
    );
    }

export default SearchBoxArea;