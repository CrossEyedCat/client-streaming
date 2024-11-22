/*
We're constantly improving the code you see.
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconBigArrowLeft1 = ({ color = "#292D32", className }) => {
    return (
        <svg
            className={`icon-big-arrow-left-1 ${className}`}
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                className="path"
                d="M16 1L8 12L16 23"
                stroke={color}
                strokeLinecap="round"
                strokeWidth="1.5"
            />
        </svg>
    );
};

IconBigArrowLeft1.propTypes = {
    color: PropTypes.string,
};
