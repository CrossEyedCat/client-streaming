import React, { useEffect } from "react";
import { useChannels } from "../../shared/hooks"; // Подключение вашего хука
import { Card } from "../Card";
import "./style.css";
import {useNavigate} from "react-router-dom";
import {useStore} from "../../store";
const ChannelList = ({ isLoggedIn }) => {
    const { getChannels, allChannels, followedChannels, isFetching } = useChannels();
    const { findMessage } = useStore();
    const navigate = useNavigate();
    useEffect(() => {
        getChannels(isLoggedIn);

    }, [isLoggedIn, getChannels]);

    if (isFetching) {
        return <div>Loading channels...</div>;
    }

    const handleCardClick = (channelId) => {
        navigate(`/watch/${channelId}`); // Переход на страницу
    };
    // Выбираем каналы для отображения в зависимости от состояния авторизации
    const channelsToRender = isLoggedIn ? followedChannels : allChannels;

    // Фильтрация каналов по findMessage
    const filteredChannels = channelsToRender.filter((channel) => {
        const lowercasedSearchText = findMessage?.toLowerCase() || '';
        return (
            channel.title?.toLowerCase().includes(lowercasedSearchText) ||
            channel.description?.toLowerCase().includes(lowercasedSearchText)
        );
    });
    console.log("filteredChannels",filteredChannels)
    return (
        <div className="channels-container">
            {filteredChannels &&
                filteredChannels.map((channel, index) => (
                    <div
                        key={channel.id || index}
                        onClick={() => handleCardClick(channel.id)}
                        className="card-wrapper" // Для управления стилями карточки при наведении
                    >
                        <Card
                            className="card-instance"
                            frameClassName="design-component-instance-node"
                            image={channel.avatarUrl || "https://via.placeholder.com/150"}
                            text={channel.viewersCount || "0"}
                            text1={channel.title || "Описание канала отсутствует"}
                        />
                    </div>
                ))}
        </div>
    );
};

export default ChannelList;