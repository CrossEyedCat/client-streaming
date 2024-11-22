/*
We're constantly improving the code you see.
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React, {useContext} from "react";
import { IconSearch } from "../../icons/IconSearch";
import { BtnSmall } from "../BtnSmall";
import "./style.css";
import {GlobalStateContext} from "../../states/GlobalStateContext";
import {SearchHeader} from "../SearchHeader";

export const Header = ({ className }) => {
    const { isSearche, toggleSearche } = useContext(GlobalStateContext);
    return (
        <div className={`header ${className}`}>
            <div className="frame">
                <img
                    className="logo"
                    alt="Logo"
                    src="https://c.animaapp.com/KIcIFpDL/img/logo-3.svg"
                />

                <div className="nav">
                    <div className="div">О нас</div>

                    <div className="div">Вопросы и ответы</div>

                    <div className="div">Контакты</div>
                </div>

                <div className="btns">
                    <div className="icon-search-wrapper" onClick={toggleSearche}>
                        <IconSearch className="icon-search" color="white" />
                    </div>

                    <BtnSmall className="btn" style="fill" />
                </div>
            </div>
        </div>
    );
};
