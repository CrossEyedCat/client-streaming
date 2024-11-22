/*
We're constantly improving the code you see.
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconEye } from "../../icons/IconEye";
import "./style.css";

export const Card = ({
                         className,
                         image = "https://c.animaapp.com/KIcIFpDL/img/image-1@2x.png",
                         text = "1200",
                         frameClassName,
                         text1 = "Спикеры палаты госдумы негодуют",
                         headClassName,
                     }) => {
    return (
        <div className={`card ${className}`}>
            <img className="image" alt="Image" src={image} />

            <div className={`head ${headClassName}`}>
                <div className="info">
                    <div className="text-wrapper-2">01 ноября 2024</div>

                    <div className="frame-2">
                        <IconEye className="icon-eye" color="#9EA0A5" />
                        <div className="text-wrapper-2">{text}</div>
                    </div>
                </div>

                <div className={`frame-3 ${frameClassName}`}>
                    <div className="text-wrapper-3">{text1}</div>

                    <p className="p">
                        Но некоторые особенности внутренней политики, которые представляют
                        собой яркий пример континентально-европейского типа политической
                        культуры, будут указаны как претенденты на роль ключевых факторов.
                    </p>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    image: PropTypes.string,
    text: PropTypes.string,
    text1: PropTypes.string,
};
