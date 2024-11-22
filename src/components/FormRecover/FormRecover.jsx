import React, {useContext} from "react";
import "./style.css";
import {IconCross} from "../../icons/IconCross";
import {GlobalStateContext} from "../../states/GlobalStateContext";
export const FormRecover = () => {
    const { goOut, recOpen} = useContext(GlobalStateContext);
    return (
        <div className="form">
            <div className="frame1">
                <div className="label1">Восстановление пароля</div>
                <p className="text-wrapper1">
                    На вашу электронную почту придёт письмо с временным паролем
                </p>
            </div>
            <div className="fild1">
                <div className="div1">Электронная почта</div>
                <div className="fild-21" />
            </div>
            <div className="btn-big1">
                <div className="text-wrapper-21">Отправить пароль</div>
            </div>
            <div onClick={goOut}>
            <IconCross className="icon-cross1" />
            </div>
        </div>
    );
};