import React from "react";
import { logout } from "../../shared/utils";
import "./style.css";
import {useNavigate} from "react-router-dom";
export const Droplist = () => {
    const navigate = useNavigate();
    const goToUtil = () => {
        navigate("/");
    };
    return (
        <div className="droplist">
            <div className="droplist-item">
                <div className="text-wrapper" onClick={goToUtil}>Личный кабинет</div>
            </div>
            <div className="div">
                <div className="text-wrapper-2" onClick={logout}>Выйти</div>
            </div>
        </div>
    );
};