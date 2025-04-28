import React, {useContext} from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Txt } from "../../components/Txt";
import { IconSendSquare1 } from "../../icons/IconSendSquare1";
import "./style.css";
import {Box} from "../../components/Box";
import {Form} from "../../components/Form";
import {FormLogIn} from "../../components/FormLogIn";
import {FormRecover} from "../../components/FormRecover";
import {GlobalStateContext} from "../../states/GlobalStateContext";
import {SearchHeader} from "../../components/SearchHeader";

export const Faq = () => {
    const { isLoggedIn, toggleLoginState, isLogIn, isRec, isSearche} = useContext(GlobalStateContext);
    return (
        <div className="faq">

            <div className="div-3">

                <Footer
                    className="footer-instance"
                    icon={<IconSendSquare1 className="icon-send-square-1" />}
                    logo="https://c.animaapp.com/we6QtbxV/img/logo-3.svg"
                />
                <div className="text-wrapper-70">Вопросы и ответы</div>

                <div className="questions">
                    <div className="txt-2">
                        <div className="text-wrapper-8">Только сплочённость команды профессионалов одухотворила всех причастных?</div>

                        <div className="txt-3">
                            <p className="text-wrapper-90">
                                Но семантический разбор внешних противодействий создаёт предпосылки для прогресса профессионального сообщества. Сложно сказать, почему многие известные личности представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок.
                            </p>
                        </div>
                    </div>
                    <div className="txt-2">
                        <div className="text-wrapper-8">Cплочённость команды?</div>

                        <div className="txt-3">
                            <p className="text-wrapper-90">
                                Cемантический разбор внешних противодействий создаёт предпосылки
                                для прогресса профессионального сообщества.
                            </p>
                        </div>
                    </div>

                    <div className="txt-2">
                        <p className="text-wrapper-8">
                            Современная методология разработки процветает, как ни в чем не
                            бывало?
                        </p>

                        <div className="txt-3">
                            <p className="text-wrapper-90">
                                Сложно сказать, почему многие известные личности представляют
                                собой не что иное, как квинтэссенцию победы маркетинга над
                                разумом и должны быть рассмотрены исключительно в разрезе
                                маркетинговых и финансовых предпосылок. Но семантический разбор
                                внешних противодействий создаёт предпосылки для прогресса
                                профессионального сообщества. Сложно сказать, почему многие
                                известные личности представляют собой не что иное, как
                                квинтэссенцию победы маркетинга над разумом и должны быть
                                рассмотрены исключительно в разрезе маркетинговых и финансовых
                                предпосылок.
                            </p>

                            <button className="button">
                                <div className="text-wrapper-10">Развернуть</div>

                                <img
                                    className="arrow"
                                    alt="Arrow"
                                    src="https://c.animaapp.com/we6QtbxV/img/arrow.svg"
                                />
                            </button>
                        </div>
                    </div>

                    <div className="txt-2">
                        <p className="text-wrapper-8">
                            Cемантический разбор внешних противодействий создаёт предпосылки
                            для прогресса профессионального сообщества?
                        </p>

                        <div className="txt-3">
                            <p className="text-wrapper-11">
                                Сложно сказать, почему многие известные личности представляют
                                собой не что иное, как квинтэссенцию победы маркетинга над
                                разумом и должны быть рассмотрены исключительно в разрезе
                                маркетинговых и финансовых предпосылок. Но семантический разбор
                                внешних противодействий создаёт предпосылки для прогресса
                                профессионального сообщества. Сложно сказать, почему многие
                                известные личности представляют собой не что иное, как
                                квинтэссенцию победы маркетинга над разумом и должны быть
                                рассмотрены исключительно в разрезе маркетинговых и финансовых
                                предпосылок.
                            </p>

                            <button className="button">
                                <div className="text-wrapper-10">Свернуть</div>

                                <img
                                    className="arrow"
                                    alt="Arrow"
                                    src="https://c.animaapp.com/we6QtbxV/img/arrow-1.svg"
                                />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="text-wrapper-12">Вы спрашиваете, мы отвечаем</div>
            </div>
            {!isSearche && <Header className="header-instance" />}
            {isSearche && <SearchHeader className="header-instance" />}
            {isLoggedIn && <Box />}
            {isLogIn && <Box />}
            {isRec&& <Box />}
            {isLoggedIn && <Form className="regist" />}
            {isLogIn && <FormLogIn  />}
            {isRec && <FormRecover/>}
        </div>
    );
};
