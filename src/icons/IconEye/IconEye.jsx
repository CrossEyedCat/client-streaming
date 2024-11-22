/*
We're constantly improving the code you see.
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconEye = ({ color = "#9EA0A5", className }) => {
    return (
        <svg
            className={`icon-eye ${className}`}
            fill="none"
            height="16"
            viewBox="0 0 16 16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                className="path"
                d="M7.99973 14.013C5.49306 14.013 3.12639 12.5463 1.49973 9.99966C0.79306 8.89966 0.79306 7.10633 1.49973 5.99966C3.13306 3.45299 5.49973 1.98633 7.99973 1.98633C10.4997 1.98633 12.8664 3.45299 14.4931 5.99966C15.1997 7.09966 15.1997 8.893 14.4931 9.99966C12.8664 12.5463 10.4997 14.013 7.99973 14.013Z"
                fill={color}
            />

            <path
                className="path"
                d="M7.9997 10.8866C6.40637 10.8866 5.11304 9.59328 5.11304 7.99995C5.11304 6.40661 6.40637 5.11328 7.9997 5.11328C9.59304 5.11328 10.8864 6.40661 10.8864 7.99995C10.8864 9.59328 9.59304 10.8866 7.9997 10.8866ZM7.9997 6.11328C6.9597 6.11328 6.11304 6.95995 6.11304 7.99995C6.11304 9.03995 6.9597 9.88661 7.9997 9.88661C9.0397 9.88661 9.88637 9.03995 9.88637 7.99995C9.88637 6.95995 9.0397 6.11328 7.9997 6.11328Z"
                fill="white"
            />
        </svg>
    );
};

IconEye.propTypes = {
    color: PropTypes.string,
};
