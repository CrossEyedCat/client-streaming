import React, {useContext, useEffect, useRef, useState} from "react";
import { Card_text } from "../../components/Card_text";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { IconEye1 } from "../../icons/IconEye1";
import { IconHeart } from "../../icons/IconHeart";
import { IconSendSquare1 } from "../../icons/IconSendSquare1";
import "./style.css";
import { SearchHeader } from "../../components/SearchHeader";
import { GlobalStateContext } from "../../states/GlobalStateContext";
import { Box } from "../../components/Box";
import { Form } from "../../components/Form";
import { FormLogIn } from "../../components/FormLogIn";
import { FormRecover } from "../../components/FormRecover";
import { ReactFlvPlayer } from "react-flv-player";
import {useChannelDetails, useChatHistory} from "../../shared/hooks"; // Подключаем ваш хук
import { useParams } from "react-router-dom";
import {connectWithSocketServer} from "../../socketConn";
import DOMPurify from 'dompurify';
import {toast} from "react-hot-toast";
import {followChannel} from "../../api";
const isNotNullish = (value) => value !== null && value !== undefined;
export const Stream = ({ streamUrl }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    // Подключаемся к серверу сокетов при монтировании компонента.
    useEffect(() => {
        connectWithSocketServer();
    }, []);

    // При изменении URL сбрасываем состояние воспроизведения.
    useEffect(() => {
        setIsPlaying(false);
    }, [streamUrl]);

    // Автозапуск видео с обработкой Promise, как в примере из статьи.
    useEffect(() => {
        const video = videoRef.current;
        if (video && streamUrl) {
            // Пытаемся запустить воспроизведение
            const playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        setIsPlaying(true);
                        console.log("Автоматическое воспроизведение началось!");
                    })
                    .catch((error) => {
                        console.error("Ошибка автоматического воспроизведения:", error);
                        // Если play() прерван (например, новым load() или pause()), повторяем попытку через 100 мс.
                        if (
                            error.name === "AbortError" ||
                            error.message.includes("play() request was interrupted")
                        ) {
                            console.warn("Повторная попытка воспроизведения через 100 мс...");
                            setTimeout(() => {
                                video
                                    .play()
                                    .then(() => {
                                        setIsPlaying(true);
                                        console.log("Повторное воспроизведение успешно началось.");
                                    })
                                    .catch((err) =>
                                        console.error("Ошибка повторного воспроизведения:", err)
                                    );
                            }, 100);
                        }
                    });
            }
        }
    }, [streamUrl]);

    return (
        <div className="channel-video-container">
            {streamUrl ? (
                <video
                    ref={videoRef}
                    preload="none"
                    src={streamUrl}
                    width="100%"
                    height="100%"
                    controls
                />
            ) : (
                "Нет данных"
            )}
        </div>
    );
};

export const Watch = () => {
    const { id } = useParams(); // Получаем id канала из URL
    const { isLoggedIn, isLogIn, isRec, isSearche } = useContext(GlobalStateContext);

    const { channelDetails, isFetching, getChannelDetails } = useChannelDetails();
    const { sendMessage, messages, viewersCount } = useChatHistory(id);
    const [visibleMessagesCount, setVisibleMessagesCount] = useState(3);
    console.log(id)
    useEffect(() => {
        getChannelDetails(id); // Запрашиваем данные канала при загрузке

        console.log("message", messages);
    }, [id]);
    const [reviewText, setReviewText] = useState(""); // Состояние для текста отзыва

    const handleInputChange = (e) => {
        setReviewText(e.target.value); // Обновляем состояние при изменении ввода
    };
    const handleSendMessage = () =>{
        if(reviewText.length>0){
            sendMessage(reviewText)
        }
        setReviewText('')
    }
    const handleFollow = () => {
        followChannel(id);
        console.log("TEST1")
    };
    const handleDownload = async () => {
        if (channelDetails && channelDetails.streamUrl) {
            const urlParts = channelDetails.streamUrl.split('/');
            const flvFileName = urlParts[urlParts.length - 1]; // Имя файла с расширением .flv
            const mp4FileName = flvFileName.replace('.flv', '.mp4'); // Заменяем расширение на .mp4

            const downloadUrl = `http://localhost:4000/streams/${mp4FileName}`; // URL для скачивания MP4 файла

            try {
                const response = await fetch(downloadUrl, { method: 'HEAD' });

                if (!response.ok) {
                    throw new Error(`Ошибка загрузки файла: ${response.status} ${response.statusText}`);
                }

                // Создаем ссылку и симулируем нажатие
                const link = document.createElement("a");
                link.href = downloadUrl;
                link.download = mp4FileName;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            } catch (error) {
                toast.error(`Не удалось загрузить файл: ${error.message}`);
            }
        } else {
            toast.error("Нет доступного файла для загрузки");
        }
    };
    return (
        <div className="Watch">
            <Footer
                className="footer-instance"
                icon={<IconSendSquare1 className="icon-send-square-1" />}
                logo="https://c.animaapp.com/upXxdJLR/img/logo-2.svg"
            />
            <div className="div-2">
                <div className="overlap">
                    <div className="btns-2">
                        <div className="btn-big" onClick={handleFollow}>
                            <div className="text-wrapper-10">Сохранить</div>
                        </div>
                        <button className="div-wrapper" onClick={handleDownload}>
                            <div className="text-wrapper-11" >Скачать</div>
                        </button>
                        <div className="icon-heart-wrapper">
                            <IconHeart className="icon-instance-node-2" color="#7047E8" />
                        </div>
                    </div>
                </div>

                <div className="rewiev">
                    <div className="fild">
                        <p className="text-wrapper-12">Оставьте свой отзыв о трансляции</p>
                        <textarea
                            className="fild-2 upsetText"
                            value={reviewText} // Привязываем значение к состоянию
                            onChange={handleInputChange} // Обработчик изменения ввода
                        />
                        <div className="btn-big">
                            <div className="text-wrapper-10" onClick={handleSendMessage}>Отправить</div>
                        </div>
                    </div>

                    <div className="frame-5">
                        <div className="text-wrapper-14">Отзывы о трансляции</div>

                        <div className="rew" style={{ maxHeight: "420px", overflowY: "auto" }}>
                            {messages
                                .reverse()
                                .sort((a, b) => new Date(b.date) - new Date(a.date))
                                .map((message, index) => (
                                    <Card_text
                                        key={index}
                                        className="design-component-instance-node"
                                        title={message.author}
                                        content={`${message.content} - ${new Date(message.date).toLocaleString()}`}
                                    />
                                ))}
                        </div>
                    </div>
                </div>

                <div className="overlap-group">
                    <div className="info">
                        <div className="text-wrapper-16">{isNotNullish(channelDetails) ?channelDetails.startDate:"..."}</div>

                        <div className="frame-6">
                            <div className="frame-7">
                                <div className="text-wrapper-16">В избранное</div>
                            </div>

                            <div className="frame-7">
                                <IconEye1 className="icon-eye" color="#9EA0A5" />
                                <div className="text-wrapper-16">{isNotNullish(channelDetails) ?viewersCount:"0"}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="txt-2">
                    <p
                        className="text-wrapper-14"
                        dangerouslySetInnerHTML={{ __html: isNotNullish(channelDetails) ? DOMPurify.sanitize(channelDetails.description) : "Нет данных" }}
                    />
                </div>

                <div className="video-instance">
                    <Stream streamUrl={channelDetails!==null ?channelDetails.streamUrl:""} />
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