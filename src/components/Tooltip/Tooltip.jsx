
import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Tooltip = ({
                            text = "Включить звук",
                            className,
                            divClassName,
                            corner = "https://c.animaapp.com/upXxdJLR/img/corner.svg",
                        }) => {
    return (
        <div className={`tooltip ${className}`}>
            <div className="text">
                <div className={`text-wrapper-6 ${divClassName}`}>{text}</div>
            </div>

            <img className="corner" alt="Corner" src={corner} />
        </div>
    );
};

Tooltip.propTypes = {
    text: PropTypes.string,
    corner: PropTypes.string,
};
