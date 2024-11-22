/*
We're constantly improving the code you see.
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { IconSendSquare } from "../../icons/IconSendSquare";
import "./style.css";

export const Footer = ({ className }) => {
    return (
        <div className={`footer ${className}`}>
            <img
                className="logo-2"
                alt="Logo"
                src="https://c.animaapp.com/KIcIFpDL/img/logo-7.svg"
            />

            <div className="nav-2">
                <div className="text-wrapper-6">О нас</div>

                <div className="text-wrapper-7">Вопросы и ответы</div>

                <div className="text-wrapper-7">Контакты</div>
            </div>

            <div className="text-wrapper-8">Политика конфиденциальности</div>

            <div className="text-wrapper-9">© Poles-e, 2024</div>

            <IconSendSquare className="icon-send-square" />
        </div>
    );
};
