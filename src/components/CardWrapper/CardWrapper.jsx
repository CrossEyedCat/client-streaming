/*
We're constantly improving the code you see.
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const CardWrapper = ({
                                className,
                                headClassName,
                                text = "Лучшее обучение для большего количества студентов",
                                logo = "https://c.animaapp.com/KIcIFpDL/img/logo-4.svg",
                                text1 = "Обучайте хирургическим приёмам, не заходя в операционную. Прямые трансляции операций позволяют вам показывать все, что видит хирург, от эндоскопических каналов до показателей жизнедеятельности и изображений из историй болезни пациентов",
                            }) => {
    return (
        <div className={`card-wrapper ${className}`}>
            <div className={`head-2 ${headClassName}`}>
                <p className="text-wrapper-4">{text}</p>

                <img className="img" alt="Logo" src={logo} />
            </div>

            <div className="txt-2">
                <p className="text-wrapper-5">{text1}</p>
            </div>
        </div>
    );
};

CardWrapper.propTypes = {
    text: PropTypes.string,
    logo: PropTypes.string,
    text1: PropTypes.string,
};
