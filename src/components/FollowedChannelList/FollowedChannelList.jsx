import React, {useEffect, useState} from "react";
import { useChannels } from "../../shared/hooks"; // Подключение вашего хука
import { Card } from "../Card";
import "./style.css";
import {useNavigate} from "react-router-dom";
import {useStore} from "../../store";
import {getFollowedChannels} from "../../api";
const FollowedChannelList = ({ isLoggedIn }) => {
    const [followedChannels, setFollowedChannels] = useState([]);
    const { findMessage } = useStore();
    const [isFetching, setIsFetching] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchFollowedChannels = async () => {
            setIsFetching(true);
            try {
                const channels = await getFollowedChannels(isLoggedIn);

                setFollowedChannels(channels.data.followedChannels);
            } catch (error) {
                console.error("Error fetching followed channels:", error);
            } finally {
                setIsFetching(false);
            }
        };

        fetchFollowedChannels();
    }, [isLoggedIn]);
    if (isFetching) {
        return <div>Loading channels...</div>;
    }

    const handleCardClick = (channelId) => {
        navigate(`/watch/${channelId}`); // Переход на страницу
    };

    // Фильтрация каналов по findMessage
    const filteredChannels = followedChannels.filter((channel) => {
        const lowercasedSearchText = findMessage?.toLowerCase() || '';
        return (
            channel.title?.toLowerCase().includes(lowercasedSearchText) ||
            channel.description?.toLowerCase().includes(lowercasedSearchText)
        );
    });
    console.log("followedChannels",filteredChannels);
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

export default FollowedChannelList;