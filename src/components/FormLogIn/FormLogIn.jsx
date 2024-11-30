import React, { useState, useContext } from "react";
import { Tab } from "../Tab";
import "./style.css";
import { IconCross } from "../../icons/IconCross";
import { IconEye } from "../../icons/IconEye";
import { IconEyeSlash } from "../../icons/IconEyeSlash"; // Добавьте иконку закрытого глаза
import { GlobalStateContext } from "../../states/GlobalStateContext";
import {useLogin} from "../../shared/hooks";

export const FormLogIn = () => {
    const { goOut, recOpen } = useContext(GlobalStateContext);
    const { login, isLoading } = useLogin();
    // Состояние для управления видимостью пароля
    const [showPassword, setShowPassword] = useState(false);
    const [formState, setFormState] = useState({
        email: {
            value: "",
            isValid: true,
            showError: false,
        },
        password: {
            value: "",
            isValid: true,
            showError: false,
        },
    });
    const handleLogin = (event) => {
        event.preventDefault();


        login(formState.email.value, formState.password.value);
        goOut();
    };
    // Функция для переключения видимости пароля
    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    return (
        <div className="form">
            <Tab className="tab-instance" size="m" status="out" />

            {/* Поле для электронной почты */}
            <div className="fild">
                <label className="text-wrapper-2" htmlFor="email">Электронная почта</label>
                <input
                    type="email"
                    id="email"
                    value={formState.email.value}
                    className="fild-2"
                    placeholder="Введите электронную почту"
                    onChange={(e) =>
                        setFormState({
                            ...formState,
                            email: {
                                ...formState.email,
                                value: e.target.value,
                            },
                        })
                    }
                />
            </div>

            {/* Поле для пароля */}
            <div className="fild">
                <label className="text-wrapper-2" htmlFor="password">Пароль</label>
                <div className="icon-eye-wrapper">
                    <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        className="fild-2"
                        placeholder="Введите пароль"
                        value={formState.password.value}
                        onChange={(e) =>
                            setFormState({
                                ...formState,
                                password: {
                                    ...formState.password,
                                    value: e.target.value,
                                },
                            })
                        }
                    />
                    <span onClick={togglePasswordVisibility} className="icon-eye">
                        {showPassword ? <IconEyeSlash /> : <IconEye />}
                    </span>
                </div>
            </div>

            <div className="btn-big">
                <div className="text-wrapper-3" onClick={handleLogin}>Войти</div>
            </div>

            <div className="text-wrapper-4" onClick={recOpen}>Забыли пароль?</div>

            {/* Иконка закрытия формы */}
            <div onClick={goOut}>
                <IconCross className="icon-cross" />
            </div>
        </div>
    );
};
