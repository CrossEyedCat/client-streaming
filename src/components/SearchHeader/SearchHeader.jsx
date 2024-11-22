import React, {useContext} from "react";
import { IconCross1 } from "../../icons/IconCross1";
import { IconSearch1 } from "../../icons/IconSearch1";
import "./style.css";
import {GlobalStateContext} from "../../states/GlobalStateContext";

export const SearchHeader = () => {
    const { isSearche, toggleSearche } = useContext(GlobalStateContext);
    return (
        <div className="headerSearch">
            <div className="overlap-group">
                <div className="text-wrapper">Поиск</div>

                <div className="btn-small">
                    <IconSearch1 className="icon-search" color="white" />
                </div>
            </div>

            <img
                className="logo"
                alt="Logo"
                src="https://c.animaapp.com/F8qB0jdV/img/logo.svg"
            />
            <div onClick={toggleSearche}>
                <IconCross1 className="icon-cross" />
            </div>
        </div>
    );
};
