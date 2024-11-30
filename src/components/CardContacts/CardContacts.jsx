
import PropTypes from "prop-types";
import React from "react";
import { IconHome } from "../../icons/IconHome";
import "./style.css";

export const CardContacts = ({
                         className,
                         divClassName,
                         text = "Адрес",
                         icon = <IconHome className="icon-home" color="#7047E8" />,
                         divClassNameOverride,
                         text1 = "Санкт-Петербург, ул. 1-я Утиная, д. 32",
                     }) => {
    return (
        <div className={`CardContacts ${className}`}>
            <div className="frame">
                <div className={`text-wrapper-4 ${divClassName}`}>{text}</div>

                {icon}
            </div>

            <p className={`element ${divClassNameOverride}`}>{text1}</p>
        </div>
    );
};

CardContacts.propTypes = {
    text: PropTypes.string,
    text1: PropTypes.string,
};
