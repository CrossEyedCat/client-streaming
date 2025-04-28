import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast"; // Импортируем react-hot-toast
import { register as registerRequest } from "../../api";

export const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const register = async (email, password, username) => {
    setIsLoading(true);

    const response = await registerRequest({
      email,
      password,
      username,
    });

    setIsLoading(false);

    if (response.error) {
      toast.error(
          response.exception?.response?.data ||
          "Error occurred while signing up. Please try again",
          { duration: 3000 }
      );
      return;
    }

    const { userDetails } = response.data;

    localStorage.setItem("user", JSON.stringify(userDetails));

    toast.success("Registration successful!", { duration: 3000 });

    navigate("/");
  };

  return {
    register,
    isLoading,
  };
};
