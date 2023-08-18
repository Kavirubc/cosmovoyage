import React from "react";
import NavBar from "../components/molecules/NavBar";
import SearchBoxArea from "../components/molecules/SearchBoxArea";
import TopBar from "../components/molecules/TopBar";
import "./pages.css"
import VerifButton from "../components/atoms/VerifButton";

const Search =() => {
    return (
        <div className="search">
            <div className="topbar">
                <TopBar >
                    <div className="titleTopBar">
                        <h1>Search</h1>
                    </div>
                </TopBar>
            </div>
            <div className="searchBoxArea">
                < SearchBoxArea/>
            </div>
            <div className="verifyButton">
                <VerifButton align="center" value="Search" />
            </div>
            <div className="NavBar">
                <NavBar/>
            </div>
        </div>

    );
    }

export default Search;
