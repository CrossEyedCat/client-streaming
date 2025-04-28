import { toast } from "react-hot-toast";
import { followChannel as followChannelRequest } from "../../api";

export const useFollowChannel = () => {
    const followChannel = async (channelId, onSuccess) => {
        const responseData = await followChannelRequest(channelId);

        if (responseData.error) {
            toast.error(
                responseData.exception?.response?.data ||
                "Error occurred when trying to follow a channel",
                { duration: 3000 }
            );
            return;
        }

        toast.success("Channel Followed Successfully", { duration: 3000 });
        onSuccess(true);
    };

    return { followChannel };
};
