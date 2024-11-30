import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const TxtAboutUs = ({
                        className,
                        text = ">10 лет",
                        text1 = "Коллектив компании делает медицину доступнее",
                        elementClassName,
                        divClassName,
                    }) => {
    return (
        <div className={`TxtAboutUs ${className}`}>
            <div className={`element ${elementClassName}`}>{text}</div>

            <p className={`p ${divClassName}`}>{text1}</p>
        </div>
    );
};

TxtAboutUs.propTypes = {
    text: PropTypes.string,
    text1: PropTypes.string,
};
