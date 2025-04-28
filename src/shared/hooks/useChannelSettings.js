import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { getChannelSettings, updateChannelSettings } from "../../api";

export const useChannelSettings = () => {
    const [channelSettings, setChannelSettings] = useState(null);

    const fetchChannelSettings = async () => {
        const response = await getChannelSettings();

        if (response.error) {
            toast.error(
                response.exception?.response?.data ||
                "Error occurred while fetching channel settings",
                { duration: 3000 }
            );
            return;
        }

        setChannelSettings({
            username: response.data.username,
            title: response.data.title,
            avatarUrl: response.data.avatarUrl,
            description: response.data.description,
            streamKey: response.data.streamKey,
        });
    };

    const saveSettings = async (data) => {
        const response = await updateChannelSettings(data);

        if (response.error) {
            toast.error(
                response.exception?.response?.data ||
                "Error occurred while saving channel settings",
                { duration: 3000 }
            );
            return;
        }

        toast.success("Channel settings saved successfully", { duration: 3000 });
    };

    useEffect(() => {
        fetchChannelSettings();
    }, []);

    return {
        isFetching: !channelSettings,
        channelSettings,
        saveSettings,
    };
};
