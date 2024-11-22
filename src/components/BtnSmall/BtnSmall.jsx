/*
We're constantly improving the code you see.
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React, {useContext} from "react";
import "./style.css";
import {IconProfileCircle} from "../../icons/IconProfileCircle";
import {GlobalStateContext} from "../../states/GlobalStateContext";

export const BtnSmall = ({ icon = false, style, className }) => {
    const { isLoggedIn, toggleLoginState } = useContext(GlobalStateContext);
    return (
        <div className={`btn-small ${style} ${className}`}>
            <IconProfileCircle />
            <div className="text-wrapper" onClick={toggleLoginState}>Войти</div>
        </div>
    );
};
BtnSmall.propTypes = {
    icon: PropTypes.bool,
    style: PropTypes.oneOf(["fill", "outline"]),
};