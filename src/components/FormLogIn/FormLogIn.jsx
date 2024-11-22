import React, {useContext} from "react";
import { Tab } from "../Tab";
import "./style.css";
import {IconCross} from "../../icons/IconCross";
import {IconEye} from "../../icons/IconEye";
import {GlobalStateContext} from "../../states/GlobalStateContext";
export const FormLogIn = () => {
    const { goOut, recOpen} = useContext(GlobalStateContext);
    return (
        <div className="form">
            <Tab className="tab-instance" size="m" status="out" />
            <div className="fild">
                <div className="text-wrapper-2">Электронная почта</div>

                <div className="fild-2" />
            </div>

            <div className="fild">
                <div className="text-wrapper-2">Пароль</div>

                <div className="icon-eye-wrapper">
                    <IconEye className="icon-eye" />
                </div>
            </div>

            <div className="btn-big">
                <div className="text-wrapper-3">Войти</div>
            </div>

            <div className="text-wrapper-4" onClick={recOpen}>Забыли пароль?</div>
            <div onClick={goOut}>
            <IconCross className="icon-cross" />
            </div>
        </div>
    );
};
