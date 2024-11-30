import PropTypes from "prop-types";
import React from "react";

export const IconHeartFill = ({ color = "#1C1D2F", className }) => {
    return (
        <svg
            className={`icon-heart-fill ${className}`}
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                className="path-3"
                clipRule="evenodd"
                d="M2.39147 11.5978C1.00006 7.49951 3.5 4.1379 6.28413 3.28583C9.00001 2.45466 11 3.30118 12 4.49951C13 3.30118 15 2.45793 17.7053 3.28583C20.6709 4.19341 23 7.49951 21.6074 11.5978C19.8495 16.9078 13.0001 20.9978 12 20.9978C10.9999 20.9979 4.20833 16.9698 2.39147 11.5978Z"
                fill={color}
                fillRule="evenodd"
            />
        </svg>
    );
};

IconHeartFill.propTypes = {
    color: PropTypes.string,
};
