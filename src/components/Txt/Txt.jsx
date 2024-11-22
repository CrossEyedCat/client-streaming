/*
We're constantly improving the code you see.
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Txt = ({
                        className,
                        text = "MOST STREAM предлагает двустороннюю аудио-видеосвязь в реальном времени, чтобы сделать коммуникацию быстрой и простой.",
                    }) => {
    return (
        <div className={`txt ${className}`}>
            <p className="MOST-STREAM">{text}</p>
        </div>
    );
};

Txt.propTypes = {
    text: PropTypes.string,
};
