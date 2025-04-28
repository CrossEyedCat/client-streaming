import { useState } from "react";
import { toast } from "react-hot-toast";
import { getFollowedChannels, getChannels as getChannelsRequest } from "../../api";

export const useChannels = () => {
    const [channels, setChannels] = useState(null);

    const getChannels = async (isLogged = false) => {
        const ChannelsData = await getChannelsRequest();

        if (ChannelsData.error) {
            toast.error(
                ChannelsData.exception?.response?.data ||
                "Error occurred while fetching the channels",
                { duration: 3000 }
            );
            return;
        }

        if (!isLogged) {
            setChannels({ channels: ChannelsData.data.channels });
            return;
        }

        const followedChannelsData = await getFollowedChannels();

        if (followedChannelsData.error) {
            toast.error(
                followedChannelsData.exception?.response?.data ||
                "Error occurred while fetching followed channels",
                { duration: 3000 }
            );
            return;
        }

        setChannels({
            channels: ChannelsData.data.channels,
            followedChannels: ChannelsData.data.channels.filter((channel) =>
                followedChannelsData.data.followedChannels.includes(channel.id)
            ),
        });
    };

    return {
        getChannels,
        isFetching: !Boolean(channels),
        allChannels: channels?.channels,
        followedChannels: channels?.followedChannels,
    };
};
