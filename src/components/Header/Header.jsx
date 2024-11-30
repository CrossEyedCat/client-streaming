/*
We're constantly improving the code you see.
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React, {useContext} from "react";
import { IconSearch } from "../../icons/IconSearch";
import { BtnSmall } from "../BtnSmall";
import "./style.css";
import {GlobalStateContext} from "../../states/GlobalStateContext";
import {useLocation, useNavigate} from "react-router-dom";

export const Header = ({ className }) => {
    const { isSearche, toggleSearche } = useContext(GlobalStateContext);
    const navigate = useNavigate();
    const location = useLocation(); // Получаем текущий путь
    const isRoot = location.pathname === "/"; // Проверяем, находится ли пользователь на главной странице
    const goToContactsPage = () => {
        navigate("/contacts");
    };
    const goToMain = () => {
        navigate("/");
    };
    const goToFaq = () => {
        navigate("/FAQ");
    };
    const goToAboutUs = () => {
        navigate("/aboutus");
    };
    return (
        <div className={`header ${className}`}>
            <div className="frame">
                <img onClick={goToMain}
                    className="logo"
                    alt="Logo"
                    src="https://c.animaapp.com/KIcIFpDL/img/logo-3.svg"
                />

                <div className="nav">
                    <div className="div" onClick={goToAboutUs}>О нас</div>

                    <div className="div" onClick={goToFaq}>Вопросы и ответы</div>

                    <div className="div" onClick={goToContactsPage}>Контакты</div>
                </div>

                <div className="btns">
                    {isRoot && ( // Показываем только на корневой странице
                        <div className="icon-search-wrapper" onClick={toggleSearche}>
                            <IconSearch className="icon-search" color="white" />
                        </div>
                    )}


                    <BtnSmall className="btn" style="fill" />
                </div>
            </div>
        </div>
    );
};
