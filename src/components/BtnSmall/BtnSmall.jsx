import PropTypes from "prop-types";
import React, { useContext, useState } from "react";
import "./style.css";
import { IconProfileCircle } from "../../icons/IconProfileCircle";
import { GlobalStateContext } from "../../states/GlobalStateContext";
import { Droplist } from "../Droplist/Droplist";

export const BtnSmall = ({ icon = false, style, className }) => {
    const { isLoggedIn, toggleLoginState } = useContext(GlobalStateContext);
    const user = localStorage.getItem("user");
    const [isDroplistVisible, setDroplistVisible] = useState(false);

    const handleMouseEnter = () => {
        if(user){setDroplistVisible(!isDroplistVisible);}
    };

    const handleMouseLeave = () => {
        setDroplistVisible(false);
    };

    return (
        <div
            className="btn-small"
            onClick={handleMouseEnter}
        >
            <div className={`btn-small ${style} ${className}`}>
                <IconProfileCircle />
                <div className="text-wrapper" onClick={() => {}}></div>
                {!user && (
                    <div className="text-wrapper" onClick={toggleLoginState}>
                        <div className="gapped">Войти</div>
                    </div>
                )}
            </div>
            {isDroplistVisible && <Droplist className="droplist" />}
        </div>
    );
};

BtnSmall.propTypes = {
    icon: PropTypes.bool,
    style: PropTypes.oneOf(["fill", "outline"]),
};
