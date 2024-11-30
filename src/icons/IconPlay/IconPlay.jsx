
import PropTypes from "prop-types";
import React from "react";

export const IconPlay = ({ color = "white", className }) => {
    return (
        <svg
            className={`icon-play ${className}`}
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                className="path-3"
                d="M3.7002 4.38562C3.7002 2.03509 6.28069 0.597611 8.27926 1.83482L20.5797 9.44937C22.4743 10.6222 22.4743 13.3781 20.5797 14.551L8.27926 22.1655C6.28069 23.4027 3.7002 21.9652 3.7002 19.6147V4.38562Z"
                fill={color}
            />
        </svg>
    );
};

IconPlay.propTypes = {
    color: PropTypes.string,
};
