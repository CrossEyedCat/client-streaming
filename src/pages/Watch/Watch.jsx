import React, {useContext, useEffect} from "react";
import { Card_text } from "../../components/Card_text";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Tooltip } from "../../components/Tooltip";
import { Txt } from "../../components/Txt";
import { IconEye1 } from "../../icons/IconEye1";
import { IconHeart } from "../../icons/IconHeart";
import { IconHeartFill } from "../../icons/IconHeartFill";
import { IconSendSquare1 } from "../../icons/IconSendSquare1";
import "./style.css";
import { SearchHeader } from "../../components/SearchHeader";
import { GlobalStateContext } from "../../states/GlobalStateContext";
import { Box } from "../../components/Box";
import { Form } from "../../components/Form";
import { FormLogIn } from "../../components/FormLogIn";
import { FormRecover } from "../../components/FormRecover";
import { ReactFlvPlayer } from "react-flv-player";
import { useChannelDetails } from "../../shared/hooks"; // Подключаем ваш хук
import { useParams } from "react-router-dom";

export const Stream = ({ streamUrl }) => {
    return (
        <div className="channel-video-container">
            <ReactFlvPlayer width="100%" height="100%" url={streamUrl} onCanPlay={(e) => e.target.play()}/>
        </div>
    );
};

export const Watch = () => {
    const { id } = useParams(); // Получаем id канала из URL
    const { isLoggedIn, isLogIn, isRec, isSearche } = useContext(GlobalStateContext);

    const { channelDetails, isFetching, getChannelDetails } = useChannelDetails();

    useEffect(() => {
        getChannelDetails(id); // Запрашиваем данные канала при загрузке
    }, [id]);

    if (!channelDetails || !channelDetails.isOnline) {
        return (
            <div className="channel-offline-placeholder">
                <p>Канал в данный момент оффлайн</p>
            </div>
        );
    }

    return (
        <div className="Watch">
            <div className="div-2">
                <Footer
                    className="footer-instance"
                    icon={<IconSendSquare1 className="icon-send-square-1" />}
                    logo="https://c.animaapp.com/upXxdJLR/img/logo-2.svg"
                />

                <div className="overlap">
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


                            <input className="fild-2 upsetText" placeholder="Комментарий"></input>


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
                    <div className="info">
                        <div className="text-wrapper-16">{channelDetails.startDate}</div>

                        <div className="frame-6">
                            <div className="frame-7">
                                <div className="text-wrapper-16">В избранное</div>
                            </div>

                            <div className="frame-7">
                                <IconEye1 className="icon-eye" color="#9EA0A5" />
                                <div className="text-wrapper-16">{channelDetails.viewers}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="txt-2">
                    <p className="text-wrapper-14">{channelDetails.description}</p>
                </div>

                <div className="video-instance">
                    <Stream streamUrl={channelDetails.streamUrl} />
                </div>

                {!isSearche && <Header className="header-instance" />}
                {isSearche && <SearchHeader className="header-instance" />}
                {isLoggedIn && <Box />}
                {isLogIn && <Box />}
                {isRec && <Box />}
                {isLoggedIn && <Form className="regist" />}
                {isLogIn && <FormLogIn />}
                {isRec && <FormRecover />}
            </div>
        </div>
    );
};