import React, {useContext} from "react";
import { Card_text } from "../../components/Card_text";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Tooltip } from "../../components/Tooltip";
import { Txt } from "../../components/Txt";
import { Video } from "../../components/Video";
import { IconEye1 } from "../../icons/IconEye1";
import { IconHeart } from "../../icons/IconHeart";
import { IconHeartFill } from "../../icons/IconHeartFill";
import { IconSendSquare1 } from "../../icons/IconSendSquare1";
import "./style.css";
import {SearchHeader} from "../../components/SearchHeader";
import {GlobalStateContext} from "../../states/GlobalStateContext";

export const Watch = () => {
    const { isLoggedIn, toggleLoginState, isLogIn, isRec, isSearche} = useContext(GlobalStateContext);
    return (
        <div className="Watch">
            <div className="div-2">
                <Footer
                    className="footer-instance"
                    icon={<IconSendSquare1 className="icon-send-square-1" />}
                    logo="https://c.animaapp.com/upXxdJLR/img/logo-2.svg"
                />
                <div className="overlap">
                    <img
                        className="path-2"
                        alt="Path"
                        src="https://c.animaapp.com/upXxdJLR/img/path-2.svg"
                    />

                    <div className="btns-2">
                        <div className="btn-big">
                            <div className="text-wrapper-10">Сохранить</div>
                        </div>

                        <div className="div-wrapper">
                            <div className="text-wrapper-11">Скачать</div>
                        </div>

                        <div className="icon-heart-wrapper">
                            <IconHeart className="icon-instance-node-2" color="#7047E8" />
                        </div>
                    </div>
                </div>

                <div className="rewiev">
                    <div className="fild">
                        <p className="text-wrapper-12">Оставьте свой отзыв о трансляции</p>

                        <div className="fild-2">
                            <div className="text-wrapper-13">Комментарий</div>
                        </div>

                        <div className="btn-big">
                            <div className="text-wrapper-10">Отправить</div>
                        </div>
                    </div>

                    <div className="frame-5">
                        <div className="text-wrapper-14">Отзывы о трансляции</div>

                        <div className="rew">
                            <Card_text className="design-component-instance-node" />
                            <Card_text className="design-component-instance-node" />
                            <Card_text className="design-component-instance-node" />
                        </div>

                        <div className="btn-big-2">
                            <div className="text-wrapper-15">Показать ещё</div>
                        </div>
                    </div>
                </div>

                <div className="overlap-group">
                    <Tooltip
                        className="tooltip-orner"
                        corner="https://c.animaapp.com/upXxdJLR/img/corner-1.svg"
                        divClassName="tooltip-orner9"
                        text="Добавить в избранное"
                    />
                    <div className="info">
                        <div className="text-wrapper-16">01 ноября 2024</div>

                        <div className="frame-6">
                            <div className="frame-7">
                                <div className="text-wrapper-16">В избранное</div>
                            </div>

                            <div className="frame-7">
                                <IconEye1 className="icon-eye" color="#9EA0A5" />
                                <div className="text-wrapper-16">1200</div>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="text-wrapper-17">
                    При наведении в область видео, появляются элементы
                    управления&nbsp;&nbsp;Убираем мышь, они&nbsp;&nbsp;исчезают
                </p>

                <p className="text-wrapper-18">
                    Если отзывов будет много, то можно сделать так, чтобы поле для отзыва
                    при скроле страницы вниз тоже&nbsp;&nbsp;перемещалось
                </p>

                <div className="group">
                    <div className="icon-heart-fill-wrapper">
                        <IconHeartFill className="icon-instance-node-2" color="#7047E8" />
                    </div>

                    <Tooltip
                        className="design-component-instance-node-2"
                        corner="https://c.animaapp.com/upXxdJLR/img/corner-2.svg"
                        divClassName="tooltip-orner9"
                        text="Убрать из избранного"
                    />
                </div>

                <div className="txt-2">
                    <p className="text-wrapper-14">
                        Эксперты утверждают, что сложившаяся структура организации
                        расставила все точки над i
                    </p>

                    <div className="frame-8">
                        <Txt className="design-component-instance-node" />
                        <div className="txt-3">
                            <div className="text-wrapper-19">Участвующие специалисты</div>

                            <div className="frame-9">
                                <div className="text-wrapper-20">Иванов С.В.</div>

                                <div className="text-wrapper-21">Петров И.А.</div>

                                <div className="text-wrapper-21">Каресёва Л.П.</div>
                            </div>
                        </div>

                        <Txt
                            className="design-component-instance-node"
                            text="Сложность"
                            text1="Высокая"
                        />
                    </div>
                </div>

                <Video className="video-instance" />
                {!isSearche && <Header className="header-instance" />}
                {isSearche && <SearchHeader className="header-instance" />}
            </div>
        </div>
    );
};
