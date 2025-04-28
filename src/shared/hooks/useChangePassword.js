import { toast } from "react-hot-toast";
import { changePassword as changePasswordRequest } from "../../api";

export const useChangePassword = () => {

    const changePassword = async (password, newPassword) => {
        const responseData = await changePasswordRequest({
            password,
            newPassword
        });

        if (responseData.error) {
            return toast.error(
                responseData.exception?.response?.data ||
                "Error occurred while trying to change password, please try again",
                { duration: 3000 }
            );
        }

        toast.success("Password changed successfully", { duration: 3000 });
    };

    return {
        changePassword,
        toast
    };
};
