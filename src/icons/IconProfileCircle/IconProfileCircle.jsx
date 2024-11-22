/*
We're constantly improving the code you see.
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconProfileCircle = ({ color = "white", className }) => {
    return (
        <svg
            className={`icon-profile-circle ${className}`}
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                className="path"
                clipRule="evenodd"
                d="M11.7625 7.44137C10.5655 7.44137 9.59518 8.4117 9.59518 9.60867C9.59518 10.8056 10.5655 11.776 11.7625 11.776C12.9594 11.776 13.9298 10.8056 13.9298 9.60867C13.9298 8.4117 12.9594 7.44137 11.7625 7.44137ZM8.05518 9.60867C8.05518 7.56118 9.71499 5.90137 11.7625 5.90137C13.81 5.90137 15.4698 7.56118 15.4698 9.60867C15.4698 11.6561 13.81 13.316 11.7625 13.316C9.71499 13.316 8.05518 11.6561 8.05518 9.60867Z"
                fill={color}
                fillRule="evenodd"
            />

            <path
                className="path"
                clipRule="evenodd"
                d="M9.3603 16.2412C7.84549 16.2412 6.61031 17.4678 6.61031 18.9912V20.6679C6.61031 21.0932 6.26557 21.4379 5.84031 21.4379C5.41505 21.4379 5.07031 21.0932 5.07031 20.6679V18.9912C5.07031 16.614 6.99836 14.7012 9.3603 14.7012H14.6284C17.0056 14.7012 18.9184 16.6292 18.9184 18.9912V20.6679C18.9184 21.0932 18.5737 21.4379 18.1484 21.4379C17.7231 21.4379 17.3784 21.0932 17.3784 20.6679V18.9912C17.3784 17.4764 16.1517 16.2412 14.6284 16.2412H9.3603Z"
                fill={color}
                fillRule="evenodd"
            />

            <path
                className="path"
                clipRule="evenodd"
                d="M12 1.76949C6.35011 1.76949 1.76998 6.34962 1.76998 11.9995C1.76998 17.6494 6.35011 22.2295 12 22.2295C17.6499 22.2295 22.23 17.6494 22.23 11.9995C22.23 6.34962 17.6499 1.76949 12 1.76949ZM0.22998 11.9995C0.22998 5.4991 5.49959 0.229492 12 0.229492C18.5004 0.229492 23.77 5.4991 23.77 11.9995C23.77 18.4999 18.5004 23.7695 12 23.7695C5.49959 23.7695 0.22998 18.4999 0.22998 11.9995Z"
                fill={color}
                fillRule="evenodd"
            />
        </svg>
    );
};

IconProfileCircle.propTypes = {
    color: PropTypes.string,
};
