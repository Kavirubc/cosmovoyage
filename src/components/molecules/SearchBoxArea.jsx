import React from "react";
import SearchBox from "../atoms/SearchBox";

//this is for the search box and the button
const SearchBoxArea = () => {
    return (
        <div className="searchBoxArea">
            <SearchBox/>
            <SearchBox />
        </div>
    );
    }

export default SearchBoxArea;