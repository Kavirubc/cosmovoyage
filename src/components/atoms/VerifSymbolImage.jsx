import React from "react";

const VerifSymbolImage = (props) => {
    return (
        <div className="verifLogo">
            <img width="" height="200" src={`/images/verif-${props.type}.svg`} alt={`logo-${props.type}`} />
        </div>
    );
};

export default  VerifSymbolImage;