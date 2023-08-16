import React from "react";

const TopBar = (props) => {
    return (
        <div className="topBar bGradient">
            <div className = {`title bGradient align-${props.align}`}>{props.children}</div>
        </div>
    );
};

export default TopBar;