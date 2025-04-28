import React, {useContext} from "react";
import { CardContacts } from "../../components/CardContacts";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { IconCall } from "../../icons/IconCall";
import { IconMessage1 } from "../../icons/IconMessage1";
import { IconSendSquare1 } from "../../icons/IconSendSquare1";
import "./style.css";
import {SearchHeader} from "../../components/SearchHeader";
import {GlobalStateContext} from "../../states/GlobalStateContext";
import {Box} from "../../components/Box";
import {Form} from "../../components/Form";
import {FormLogIn} from "../../components/FormLogIn";
import {FormRecover} from "../../components/FormRecover";
import { YMaps, Map } from '@pbe/react-yandex-maps';
export const Contacts = () => {
    const { isLoggedIn, toggleLoginState, isLogIn, isRec, isSearche} = useContext(GlobalStateContext);
    return (
        <div className="Contacts">

            <div className="div-2">
                <Footer
                    className="footer-instance"
                    icon={<IconSendSquare1 className="icon-send-square-1" />}
                    logo="https://c.animaapp.com/upXxdJLR/img/logo-2.svg"
                />
                <div className="element-feedback">
                    <div className="overlap">
                        <div className="overlap-group">
                            <img
                                className="logo-2"
                                alt="Logo"
                                src="https://c.animaapp.com/zUGUnQus/img/logo-3.svg"
                            />

                            <div className="filds">
                                <div className="fild10">
                                    <div className="div-wrapper">
                                        <div className="text-wrapper-7">Имя</div>
                                    </div>
                                </div>

                                <div className="fild10">
                                    <div className="div-wrapper">
                                        <div className="text-wrapper-7">Телефон</div>
                                    </div>
                                </div>

                                <div className="btn-big10">
                                    <div className="text-wrapper-8">Отправить</div>
                                </div>
                            </div>

                            <p className="p1">
                                Оставьте ваш номер телефона, мы свяжемся с вами и ответим
                                на любые вопросы
                            </p>
                        </div>

                        <div className="txt">
                            <div className="overlap-group-2">
                                <p className="supporting-text">
                                    Нажимая на кнопку «Отправить», вы подтверждаете, что согласны
                                    с положениями политики конфиденциальности
                                </p>


                            </div>
                        </div>

                        <div className="text-wrapper-100">Обратная связь</div>
                    </div>
                </div>

                <div className="element-contacts">
                    <div>
                        <YMaps >
                            <div>
                                <Map className="map" width={1141} height={382} defaultState={{ center: [60.034142, 30.296049], zoom: 20 }} />
                            </div>
                        </YMaps>
                    </div>
                    <div className="frame-3">
                        <CardContacts/>
                        <CardContacts
                            className="card-instance"
                            divClassName="design-component-instance-node"
                            divClassNameOverride="design-component-instance-node"
                            icon={<IconCall className="icon-instance-node" color="white" />}
                            text="Телефон"
                            text1="8 (800) 511 09 58"
                        />
                        <CardContacts
                            icon={
                                <IconMessage1 className="icon-instance-node" color="#7047E8" />
                            }
                            text="Электронная почта"
                            text1="info@poles-e.ru"
                        />
                    </div>

                    <div className="text-wrapper-10">Контакты</div>
                </div>
            </div>
            <Header className="header-instance" />
            {isLoggedIn && <Box />}
            {isLogIn && <Box />}
            {isRec&& <Box />}
            {isLoggedIn && <Form className="regist" />}
            {isLogIn && <FormLogIn  />}
            {isRec && <FormRecover/>}
        </div>
    );
};
