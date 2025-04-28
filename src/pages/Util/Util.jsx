import React, { useContext, useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { IconDocumentFill } from "../../icons/IconDocumentFill";
import { IconHeartFill1 } from "../../icons/IconHeartFill1";
import { IconLogout } from "../../icons/IconLogout";
import { IconSendSquare1 } from "../../icons/IconSendSquare1";
import "./style.css";
import { SearchHeader } from "../../components/SearchHeader";
import { Box } from "../../components/Box";
import { Form } from "../../components/Form";
import { FormLogIn } from "../../components/FormLogIn";
import { FormRecover } from "../../components/FormRecover";
import { GlobalStateContext } from "../../states/GlobalStateContext";
import { SidebarItem } from "./SidebarItem";
import { ResetPassword } from "../../components/ResetPassword";
import { getChannelSettings, updateChannelSettings } from "../../api";
import { toast } from "react-hot-toast";
import {logout} from "../../shared/utils";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DOMPurify from "dompurify";
import {useNavigate} from "react-router-dom";
export const Util = () => {
    const navigate = useNavigate();
    const isNotNullish = (value) => value !== null && value !== undefined;
    const { isLoggedIn, toggleLoginState, isLogIn, isRec, isSearche } = useContext(GlobalStateContext);
    const [utilChange, setUtilChange] = useState(false);
    const [isFetching, setIsFetching] = useState(true);
    const [formData, setFormData] = useState({
        username: "",
        title: "",
        avatarUrl: "",
        description: "",
        streamKey: "",
    });
    const goToUtil = () => {
        navigate("/util");
    };
    const goToFollowed  = () => {
        navigate("/followed");
    };
    // Fetch channel settings
    const fetchChannelSettings = async () => {
        setIsFetching(true);
        const response = await getChannelSettings();

        if (response.error) {
            toast.error(response.exception?.response?.data || "Error Occurred While fetching channel settings");
        } else {
            setFormData({
                username: response.data.username || "",
                title: response.data.title || "",
                avatarUrl: response.data.avatarUrl || "",
                description: response.data.description || "",
                streamKey: response.data.streamKey || "",
            });
        }
        setIsFetching(false);
    };

    // Save updated settings
    const handleSave = async () => {
        if (utilChange) {
            // Исключаем "streamKey" из данных запроса
            const { streamKey,streamKey1, ...validData } = formData;

            const response = await updateChannelSettings(validData);

            if (response.error) {
                toast.error(response.exception?.response?.data || "Error Occurred While saving channel settings");
            } else {
                toast.success("Channel settings saved successfully");
                setUtilChange(false);
                await fetchChannelSettings(); // Refresh data after saving
            }
        }
    };

    useEffect(() => {
        fetchChannelSettings();
    }, []);

    const toggleUtilChange = () => {
        setUtilChange(!utilChange);
    };

    const handleInputChange = (e) => {
        if (typeof e === "string") {
            // Это вызов из ReactQuill, обновляем только описание
            setFormData((prevData) => ({
                ...prevData,
                description: e,
            }));
        } else {
            // Это вызов из обычного input
            const { name, value } = e.target;
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };
    return (
        <div className="Util">
            <div className="div-2">
                <Footer
                    className="footer-instance"
                    icon={<IconSendSquare1 className="icon-send-square-1" />}
                    logo="https://c.animaapp.com/upXxdJLR/img/logo-2.svg"
                />
                {!utilChange && (
                    <div className="btn-big">
                        <div className="text-wrapper-7" onClick={toggleUtilChange}>
                            Изменить настройки
                        </div>
                    </div>
                )}
                {utilChange && <ResetPassword className="reset" />}
                {isFetching ? (
                    <div>Загрузка...</div>
                ) : (
                    <div className="form">
                        <div className="text-wrapper-8">Мои данные</div>

                        <div className="fild">
                            <div className="text-wrapper-9">Имя</div>
                            <input
                                className="fild-2"
                                name="username"
                                value={formData.username}
                                onChange={handleInputChange}
                                disabled={!utilChange}
                            />
                        </div>

                        <div className="fild">
                            <div className="text-wrapper-9">Название потока</div>
                            <input
                                className="fild-2"
                                name="title"
                                value={formData.title}
                                onChange={handleInputChange}
                                disabled={!utilChange}
                            />
                        </div>

                        <div className="fild">
                            <div className="text-wrapper-9">Описание</div>
                            <ReactQuill theme="snow" value={formData.description} onChange={handleInputChange} readOnly={!utilChange} />

                        </div>
                        <div className="fild">
                            <div className="text-wrapper-9">Url превью</div>
                            <input
                                className="fild-2"
                                name="avatarUrl"
                                value={formData.avatarUrl}
                                onChange={handleInputChange}
                                disabled={!utilChange}
                            />
                        </div>
                        <div className="fild">
                            <div className="text-wrapper-9">Ключ потока</div>
                            <input
                                className="fild-2"
                                name="streamKey1"
                                value={formData.streamKey}
                                onChange={handleInputChange}
                                disabled={!utilChange}
                            />
                        </div>

                        {utilChange && (
                            <div className="btn-big3" onClick={handleSave}>
                                <div className="text-wrapper-3">Сохранить</div>
                            </div>
                        )}
                    </div>
                )}

                <div className="text-wrapper-11">Настройки</div>

                <div className="sidebar">
                    <div className="frame-2">
                        <div onClick={goToUtil}>
                            <SidebarItem
                                className="sidebar-item-instance"
                                status="activ"
                                text="Настройки"
                            />
                        </div>
                        <div onClick={goToFollowed}>
                            <SidebarItem
                                className="sidebar-item-instance"
                                icon={
                                    <IconHeartFill1
                                        className="icon-instance-node"
                                        color="#9EA0A5"
                                    />
                                }
                                status="default"
                                text="Избранное"

                            />
                        </div>
                        {/*<div>
                            <SidebarItem
                                className="sidebar-item-instance"
                                icon={
                                    <IconDocumentFill
                                        className="icon-instance-node"
                                        color="#9EA0A5"
                                    />
                                }
                                status="default"
                                text="История просмотров"
                            />
                        </div>*/}
                    </div>

                    <img
                        className="line-2"
                        alt="Line"
                        src="https://c.animaapp.com/Sriqqs9p/img/line-1.svg"
                    />
                    <div onClick={logout}>
                        <SidebarItem
                            className="sidebar-item-instance"
                            icon={<IconLogout className="icon-instance-node" />}
                            status="default"
                            text="Выйти"
                        />
                    </div>
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
