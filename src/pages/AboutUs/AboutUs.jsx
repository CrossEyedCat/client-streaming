import React, {useContext} from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { TxtAboutUs} from "../../components/TxtAboutUs";
import { IconSendSquare1 } from "../../icons/IconSendSquare1";
import "./style.css";
import {Box} from "../../components/Box";
import {Form} from "../../components/Form";
import {FormLogIn} from "../../components/FormLogIn";
import {FormRecover} from "../../components/FormRecover";
import {GlobalStateContext} from "../../states/GlobalStateContext";

export const AboutUs = () => {
    const { isLoggedIn, toggleLoginState, isLogIn, isRec, isSearche} = useContext(GlobalStateContext);
    return (
        <div className="AboutUs">
            <div className="div-2">
                <Footer
                    className="footer-instance"
                    icon={<IconSendSquare1 className="icon-send-square-1" />}
                    logo="https://c.animaapp.com/HxNiPGyi/img/logo-3.svg"
                />
                <div className="text-wrapper-60">О нас</div>

                <div className="group">
                    <div className="flexcontainer-wrapper">
                        <div className="flexcontainer">
                            <p className="text">
                                <span className="span">
                                  Компания ООО «Полесье» является структурным подразделением
                                  компании ООО «Техно Медицина», которое осуществляет разработку
                                  IT решений, а также продуктов в сфере биотехнологий. <br />
                                </span>
                            </p>

                            <p className="text">
                                <span className="span">
                                  Более 10 лет делаем медицину доступнее. Наши проекты
                                  реализованы в крупных медцентрах РФ по всей России.
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="frame-20">
                        <TxtAboutUs className="txt-instance" />
                        <TxtAboutUs
                            className="design-component-instance-node"
                            text="870"
                            text1="Человеко-часов потребовалось для создания нашего первого решения для телемедицины"
                        />
                        <TxtAboutUs
                            className="txt-3"
                            divClassName="txt-2"
                            elementClassName="txt-2"
                            text="5"
                            text1="Собственных серверов на территории РФ"
                        />
                    </div>
                </div>
            </div>
            <div className="overlap-group">
                <Header
                    className="header-instance"
                    logo="https://c.animaapp.com/HxNiPGyi/img/logo-2.svg"
                />
            </div>
            {isLoggedIn && <Box />}
            {isLogIn && <Box />}
            {isRec&& <Box />}
            {isLoggedIn && <Form className="regist" />}
            {isLogIn && <FormLogIn  />}
            {isRec && <FormRecover/>}
        </div>
    );
};
