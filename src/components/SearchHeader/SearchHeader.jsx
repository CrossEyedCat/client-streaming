import React, {useContext} from "react";
import { IconCross1 } from "../../icons/IconCross1";
import { IconSearch1 } from "../../icons/IconSearch1";
import "./style.css";
import {GlobalStateContext} from "../../states/GlobalStateContext";
import { useStore } from "../../store";

export const SearchHeader = () => {
    const { toggleSearche } = useContext(GlobalStateContext);
    const { findMessage } = useStore((state) => state);
    const handleInputChange = (event) => {
        const searchText = event.target.value;
        console.log(searchText)
        useStore.getState().setFindMessage(searchText);
        console.log(useStore.getState().findMessage)
    };
    return (
        <div className="headerSearch">
            <div >
                <input
                    type="text"
                    className="overlap-group"
                    placeholder="Поиск"
                    onChange={handleInputChange}
                />

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
