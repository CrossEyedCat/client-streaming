/*
We're constantly improving the code you see.
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { IconSendSquare } from "../../icons/IconSendSquare";
import "./style.css";
import {useLocation, useNavigate} from "react-router-dom";

export const Footer = ({ className }) => {
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
    const goToTop = () =>{
        window.scrollTo(0, 0);
    }
    return (
        <div className={`footer ${className}`}>
            <img onClick={goToMain}
                className="logo-2"
                alt="Logo"
                src="https://c.animaapp.com/KIcIFpDL/img/logo-7.svg"
            />

            <div className="nav-2">
                <div className="text-wrapper-6" onClick={goToAboutUs}>О нас</div>

                <div className="text-wrapper-7" onClick={goToFaq}>Вопросы и ответы</div>

                <div className="text-wrapper-7" onClick={goToContactsPage}>Контакты</div>
            </div>


            <div className="text-wrapper-9">© Poles-e, 2024</div>
            <div onClick={goToTop}><IconSendSquare  className="icon-send-square" /></div>

        </div>
    );
};
