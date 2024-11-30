import React, { useEffect } from "react";
import { useChannels } from "../../shared/hooks"; // Подключение вашего хука
import { Card } from "../Card";
import "./style.css";
import {useNavigate} from "react-router-dom";

const ChannelList = ({ isLoggedIn }) => {
    const { getChannels, allChannels, followedChannels, isFetching } = useChannels();
    const navigate = useNavigate();
    useEffect(() => {
        getChannels(isLoggedIn);
    }, [isLoggedIn, getChannels]);

    if (isFetching) {
        return <div>Loading channels...</div>;
    }
    const channelsToRender = isLoggedIn ? followedChannels : allChannels;

    const handleCardClick = (channelId) => {
        navigate(`/watch/${channelId}`); // Переход на страницу
    };

    return (
        <div className="channels-container">
            {channelsToRender &&
                channelsToRender.map((channel, index) => (
                    <div
                        key={channel.id || index}
                        onClick={() => handleCardClick(channel.id)}
                        className="card-wrapper" // Для управления стилями карточки при наведении
                    >
                        <Card
                            className="card-instance"
                            frameClassName="design-component-instance-node"
                            image={channel.avatarUrl || "https://via.placeholder.com/150"}
                            text={channel.subscribers || "0"}
                            text1={channel.title || "Описание канала отсутствует"}
                        />
                    </div>
                ))}
        </div>
    );
};

export default ChannelList;