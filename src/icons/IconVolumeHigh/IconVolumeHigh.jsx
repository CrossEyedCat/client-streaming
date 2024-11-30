import PropTypes from "prop-types";
import React from "react";

export const IconVolumeHigh = ({ color = "white", className }) => {
    return (
        <svg
            className={`icon-volume-high ${className}`}
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                className="path-3"
                d="M18.0003 16.7493C17.8403 16.7493 17.6903 16.6993 17.5503 16.5993C17.2203 16.3493 17.1503 15.8793 17.4003 15.5493C18.9703 13.4593 18.9703 10.5393 17.4003 8.4493C17.1503 8.1193 17.2203 7.6493 17.5503 7.3993C17.8803 7.1493 18.3503 7.2193 18.6003 7.5493C20.5603 10.1693 20.5603 13.8293 18.6003 16.4493C18.4503 16.6493 18.2303 16.7493 18.0003 16.7493Z"
                fill={color}
            />

            <path
                className="path-3"
                d="M19.8304 19.2493C19.6704 19.2493 19.5203 19.1993 19.3804 19.0993C19.0504 18.8493 18.9804 18.3793 19.2304 18.0493C21.9004 14.4893 21.9004 9.5093 19.2304 5.9493C18.9804 5.6193 19.0504 5.1493 19.3804 4.8993C19.7104 4.6493 20.1804 4.7193 20.4304 5.0493C23.5004 9.1393 23.5004 14.8593 20.4304 18.9493C20.2904 19.1493 20.0604 19.2493 19.8304 19.2493Z"
                fill={color}
            />

            <path
                className="path-3"
                d="M14.02 3.77972C12.9 3.15972 11.47 3.31972 10.01 4.22972L7.09 6.05972C6.89 6.17972 6.66 6.24972 6.43 6.24972H5C2.58 6.24972 1.25 7.57972 1.25 9.99972V13.9997C1.25 16.4197 2.58 17.7497 5 17.7497H6.43C6.66 17.7497 6.89 17.8197 7.09 17.9397L10.01 19.7697C10.89 20.3197 11.75 20.5897 12.55 20.5897C13.07 20.5897 13.57 20.4697 14.02 20.2197C15.13 19.5997 15.75 18.3097 15.75 16.5897V7.40972C15.75 5.68972 15.13 4.39972 14.02 3.77972Z"
                fill={color}
            />
        </svg>
    );
};

IconVolumeHigh.propTypes = {
    color: PropTypes.string,
};