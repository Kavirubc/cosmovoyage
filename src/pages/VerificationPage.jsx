import React from "react";
//import css file from ../app.css
import "../App.css";

import VerifSymbolImage from "../components/atoms/VerifSymbolImage";
import VerifTextArea from "../components/molecules/VerifTextArea";
import VerifDetails from "../components/molecules/VerifDetails";
import VerifButton from "../components/atoms/VerifButton";

const VerificationPage = (props) => {
    return (
        <div className="container">
            {/*<TopBar align={props.titleAlign}>Verification</TopBar>*/}
            <VerifSymbolImage type={props.imageType}/>
            <VerifDetails>{props.children}</VerifDetails>
            <VerifTextArea/>
            <VerifButton value = "Verify"/>
        </div>
    );
};

export default  VerificationPage;