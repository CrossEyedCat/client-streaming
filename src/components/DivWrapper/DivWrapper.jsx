/*
We're constantly improving the code you see.
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const DivWrapper = ({
                               className,
                               text = "Эксперты утверждают, что сложившаяся структура организации расставила все точки над i",
                           }) => {
    return (
        <div className={`div-wrapper1 ${className}`}>
            <div className="i-wrapper">
                <p className="i">{text}</p>
            </div>
        </div>
    );
};

DivWrapper.propTypes = {
    text: PropTypes.string,
};
