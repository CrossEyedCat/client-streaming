import React from "react";
import { IconEye } from "../../icons/IconEye";
import "./style.css";

export const ResetPassword = () => {
    return (
        <div className="ResetPassword">
            <div className="text-wrapper">Смена пароля</div>

            <div className="fild">
                <div className="div">Старый пароль</div>

                <div className="icon-eye-wrapper">
                    <IconEye className="icon-eye" />
                </div>
            </div>

            <div className="fild">
                <div className="div">Новый пароль</div>

                <div className="icon-eye-wrapper">
                    <IconEye className="icon-eye" />
                </div>
            </div>

            <div className="fild">
                <div className="div">Новый пароль ещё раз</div>

                <div className="icon-eye-wrapper">
                    <IconEye className="icon-eye" />
                </div>
            </div>

            <div className="btn-big">
                <div className="text-wrapper-2">Сохранить</div>
            </div>
        </div>
    );
};
