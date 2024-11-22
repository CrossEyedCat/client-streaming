/*
We're constantly improving the code you see.
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { IconBigArrowLeft1 } from "../../icons/IconBigArrowLeft1";
import { IconBigArrowRight1 } from "../../icons/IconBigArrowRight1";
import "./style.css";

export const Slider = ({ className }) => {
    return (
        <div className={`slider ${className}`}>
            <div className="icon-big-arrow-left-wrapper">
                <IconBigArrowLeft1 className="icon-instance-node" color="#9EA0A5" />
            </div>

            <img
                className="div-2"
                alt="Div"
                src="https://c.animaapp.com/KIcIFpDL/img/div-1.svg"
            />

            <div className="icon-big-arrow-right-wrapper">
                <IconBigArrowRight1 className="icon-instance-node" color="#9EA0A5" />
            </div>
        </div>
    );
};
