/*
We're constantly improving the code you see.
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React, {useContext} from "react";
import "./style.css";
import {GlobalStateContext} from "../../states/GlobalStateContext";

export const Tab = ({ status, size, className }) => {
    const { toggleLogIn, isLogIn, toggleLoginState} = useContext(GlobalStateContext);
    return (
        <div className={`tab ${className}`}>
            <div className={`frame ${status} ${size}`} onClick={toggleLoginState}>
                {!isLogIn && <div className="text-wrapper">Регистрация</div>}

                {isLogIn && <div className="text-wrapper-2">Регистрация</div>}
            </div>

            <div className={`div status-${status} ${size}`} onClick={toggleLogIn}>
                {isLogIn && <div className="text-wrapper">Вход</div>}

                {!isLogIn && <div className="text-wrapper-2">Вход</div>}
            </div>
        </div>
    );
};

Tab.propTypes = {
    status: PropTypes.oneOf(["out", "reg"]),
    size: PropTypes.oneOf(["m", "s"]),
};
