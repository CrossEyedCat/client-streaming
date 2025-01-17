/*
We're constantly improving the code you see.
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconSettingsFill1 = ({ color = "#9EA0A5", className }) => {
    return (
        <svg
            className={`icon-settings-fill-1 ${className}`}
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                className="path"
                clipRule="evenodd"
                d="M15.2065 4.64302C15.055 3.34721 14.3358 2 12 2C9.84583 2 9.0666 3.14576 8.83957 4.34033C8.71989 4.97007 7.41047 5.70512 6.80691 5.48925C5.70845 5.09638 4.392 5.20101 3.33971 7C2.11106 9.10049 2.90636 10.3737 3.93878 11.1093C4.43987 11.4663 4.51751 12.7184 4.05334 13.1223C3.1222 13.9325 2.39485 15.2025 3.33971 17C4.43278 18.771 5.86887 18.7497 7.02098 18.2966C7.60106 18.0684 8.72102 18.7379 8.79341 19.357C8.94492 20.6528 9.66412 22 12 22C14.3358 22 15.055 20.6528 15.2065 19.357C15.2789 18.7379 16.3989 18.0684 16.979 18.2966C18.1311 18.7497 19.5671 18.771 20.6602 17C21.7246 14.9751 20.667 13.6197 19.5865 12.8368C19.1196 12.4985 19.1196 11.5015 19.5865 11.1632C20.667 10.3803 21.7246 9.02485 20.6602 7C19.5671 5.22903 18.1311 5.25025 16.979 5.70341C16.3989 5.93158 15.2789 5.26214 15.2065 4.64302ZM13.6 12C13.6 12.8837 12.8837 13.6 12 13.6C11.1163 13.6 10.4 12.8837 10.4 12C10.4 11.1163 11.1163 10.4 12 10.4C12.8837 10.4 13.6 11.1163 13.6 12ZM15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                fill={color}
                fillRule="evenodd"
            />
        </svg>
    );
};

IconSettingsFill1.propTypes = {
    color: PropTypes.string,
};
