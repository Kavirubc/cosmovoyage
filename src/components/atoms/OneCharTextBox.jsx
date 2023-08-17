import React from "react";

const OneCharTextBox = (props) => {
    return (
        <input maxLength="1" type="text" className="oneCharTextBox" autocomplete="off"
            id={props.id}
            value={props.value}
            ref={props.setInputRef}
            onInput={props.onInput}
            onKeyDown={props.onKeyDown}
            onPaste={props.onPaste}
        />
    )
}

export default OneCharTextBox;