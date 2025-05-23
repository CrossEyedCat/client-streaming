import { useState } from "react";
import { toast } from "react-hot-toast";
import { getChannelDetails as getChannelDetailsRequest } from "../../api";

export const useChannelDetails = () => {
    const [channelDetails, setChannelDetails] = useState(null);

    const getChannelDetails = async (id) => {
        const responseData = await getChannelDetailsRequest(id);

        if (responseData.error) {
            toast.error(
                responseData.exception?.response?.data ||
                "Error occurred while fetching channel details",
                { duration: 3000 }
            );
            return;
        }

        setChannelDetails(responseData.data);
    };

    return {
        channelDetails,
        isFetching: !channelDetails,
        getChannelDetails,
    };
};
