import React from "react";
import './Button.css'

const Button = ({children, clickButton}) => {
    return(
        <button onClick={clickButton} className="button">
            {children}
        </button>
    );
}


export default Button;