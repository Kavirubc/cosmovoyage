import React from "react";

const TopBar = (props) => {
    return (
        <div className="topBar bGradient">
            <h1 className="text-2xl md:text-3xl px-6 py-3" style={{ borderBottom: "1px solid #ffffff24" }}>{process.env.REACT_APP_NAME}</h1>
            <div className = {`title bGradient align-${props.align}`}>{props.children}</div>
        </div>
    );
};

export default TopBar;