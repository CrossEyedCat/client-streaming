import React, {useContext, useState} from "react";
import { Tab } from "../Tab";
import { IconCross } from "../../icons/IconCross";
import { IconEye } from "../../icons/IconEye";
import "./style.css";
import { GlobalStateContext } from "../../states/GlobalStateContext";
import {IconEyeSlash} from "../../icons/IconEyeSlash";
import {useLogin, useRegister} from "../../shared/hooks";

export const Form = () => {
    const { isLoggedIn, toggleLoginState, goOut } = useContext(GlobalStateContext);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const { isLoading, register } = useRegister();

    const [formState, setFormState] = useState({
        email: {
            value: "",
            isValid: false,
            showError: false,
        },
        password: {
            value: "",
            isValid: false,
            showError: false,
        },
        username: {
            value: "",
            isValid: false,
            showError: false,
        },
        passwordConf: {
            value: "",
            isValid: false,
            showError: false,
        },
    });

    const handleRegister = (event) => {
        event.preventDefault();

        register(
            formState.email.value,
            formState.password.value,
            formState.username.value
        );
        goOut();
    };
    // Функция для переключения состояния видимости пароля
    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);
    return (
        <div className="form">
            <Tab className="tab-instance" size="m" status="reg" />

            {/* Поле для имени */}
            <div className="fild">
                <label className="text-wrapper-2" htmlFor="name">Имя</label>
                <input type="text"
                       onChange={(e) =>
                           setFormState({
                               ...formState,
                               username: {
                                   ...formState.username,
                                   value: e.target.value
                               }
                           })}
                       id="name" className="fild-3" value={formState.username.value} />
            </div>

            {/* Поле для электронной почты */}
            <div className="fild">
                <label className="text-wrapper-2" htmlFor="email">Электронная почта</label>
                <input type="email"
                       onChange={(e) =>
                           setFormState({
                               ...formState,
                               email: {
                                   ...formState.email,
                                   value: e.target.value
                               }
                           })
                       }
                       id="email" className="fild-3" value={formState.email.value}/>
            </div>

            {/* Поле для специализации */}
            <div className="fild">
                <label className="text-wrapper-2" htmlFor="specialization">Специализация</label>
                <input type="text" id="specialization" className="fild-3"/>
            </div>

            {/* Поле для пароля */}
            <div className="fild">
                <label className="text-wrapper-2"
                       htmlFor="password">Пароль</label>
                <div className="icon-eye-wrapper">
                    <input
                        type={showPassword ? "text" : "password"}
                        onChange={(e) =>
                            setFormState({
                                ...formState,
                                password: {
                                    ...formState.password,
                                    value: e.target.value
                                }
                            })
                        }
                        id="password"
                        value={formState.password.value}
                        className="fild-3"
                        placeholder="Введите пароль"
                    />
                    <span onClick={togglePasswordVisibility} className="icon-eye">
                        {showPassword ? <IconEyeSlash/> : <IconEye />}
                    </span>
                </div>
            </div>

            {/* Поле для повтора пароля */}
            <div className="fild">
                <label className="text-wrapper-2" htmlFor="confirm-password">Повтор пароля</label>
                <div className="icon-eye-wrapper">
                    <input
                        type={showConfirmPassword ? "text" : "password"}
                        id="confirm-password"
                        value={formState.passwordConf.value}
                        className="fild-3"
                        placeholder="Повторите пароль"
                        onChange={(e) =>
                            setFormState({
                                ...formState,
                                passwordConf: {
                                    ...formState.passwordConf,
                                    value: e.target.value
                                }
                            })
                        }
                    />
                    <span onClick={toggleConfirmPasswordVisibility} className="icon-eye">
                        {showConfirmPassword ? <IconEyeSlash/> : <IconEye />}
                    </span>
                </div>
            </div>

            {/* Кнопка и соглашение */}
            <div className="frame-2">
                <button className="btn-big">
                    <span className="text-wrapper-5" onClick={handleRegister}>Зарегистрироваться</span>
                </button>
                <p className="p">
                    <span className="span">
                        Нажимая на кнопку «зарегистрироваться», вы подтверждаете, что прочли
                        и согласны с положениями{" "}
                    </span>
                    <span className="text-wrapper-6">политики конфиденциальности</span>
                </p>
            </div>

            {/* Кнопка закрытия */}
            <div onClick={goOut}>
                <IconCross className="icon-cross" />
            </div>
        </div>
    );
};