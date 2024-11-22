import React, {useContext} from "react";
import { Fild } from "../Fild";
import { Tab } from "../Tab";
import { IconCross } from "../../icons/IconCross";
import { IconEye } from "../../icons/IconEye";
import "./style.css";
import {GlobalStateContext} from "../../states/GlobalStateContext";

export const Form = () => {
    const { isLoggedIn, toggleLoginState, goOut} = useContext(GlobalStateContext);
    return (
        <div className="form">
            <Tab className="tab-instance" size="m" status="reg" />
            <div className="fild">
                <div className="text-wrapper-2">Имя</div>
                <div className="fild-3"/>
            </div>
            <div className="fild">
                <div className="text-wrapper-2">Электронная почта</div>
                <div className="fild-3"/>
            </div>

            <div className="fild">
                <div className="text-wrapper-2">Специализация</div>

                <div className="fild-3" />
            </div>

            <div className="fild">
                <div className="text-wrapper-2">Пароль</div>

                <div className="icon-eye-wrapper">
                    <IconEye className="icon-eye" />
                </div>
            </div>

            <div className="fild">
                <div className="text-wrapper-2">Повтор пароля</div>

                <div className="icon-eye-wrapper">
                    <IconEye className="icon-eye" />
                </div>
            </div>

            <div className="frame-2">
                <div className="btn-big">
                    <div className="text-wrapper-5">Зарегистрироваться</div>
                </div>

                <p className="p">
          <span className="span">
            Нажимая на кнопку «зарегистрироваться», вы подтверждаете, что прочли
            и согласны с положениями{" "}
          </span>

                    <span className="text-wrapper-6">политики конфиденциальности</span>
                </p>
            </div>
            <div onClick={goOut}>
            <IconCross className="icon-cross" />
            </div>
        </div>
    );
};