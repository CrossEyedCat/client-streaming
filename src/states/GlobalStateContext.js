import React, { createContext, useState } from "react";

export const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLogIn, setIsLogIn] = useState(false);
    const [isRec, setIsRec] = useState(false);
    const [isSearche, setSearche] = useState(false);
    const toggleLoginState = () => {
        setIsLoggedIn(true);
        setIsLogIn(false);
        setIsRec(false);
    };
    const toggleLogIn = () => {
        setIsLoggedIn(false);
        setIsLogIn(true);
        setIsRec(false);
    };

    const recOpen=()=>{
        setIsLoggedIn(false);
        setIsLogIn(false);
        setIsRec(true);
    }
    const goOut=()=>{
        setIsLoggedIn(false);
        setIsLogIn(false);
        setIsRec(false);
    }
    const toggleSearche=()=>{
        setSearche((prev)=>!prev)
    }
    return (
        <GlobalStateContext.Provider value={{ isLoggedIn, toggleLoginState, isLogIn, toggleLogIn, goOut, isRec, recOpen, isSearche, toggleSearche }}>
            {children}
        </GlobalStateContext.Provider>
    );
};