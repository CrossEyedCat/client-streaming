import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast"; // Импортируем toast
import { login as loginRequest } from "../../api";

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const login = async (email, password) => {
    setIsLoading(true);

    const response = await loginRequest({ email, password });

    setIsLoading(false);

    if (response.error) {
      toast.error(
          response.exception?.response?.data ||
          "Error occurred when trying to log in",
          { duration: 3000 }
      );
      return;
    }

    const { userDetails } = response.data;

    localStorage.setItem("user", JSON.stringify(userDetails));
    window.location.reload();
  };

  return {
    login,
    isLoading,
  };
};
