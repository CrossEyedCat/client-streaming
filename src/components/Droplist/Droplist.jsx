import React from "react";
import { logout } from "../../shared/utils";
import "./style.css";
import {useNavigate} from "react-router-dom";
export const Droplist = () => {
    const navigate = useNavigate();
    const goToUtil = () => {
        navigate("/util");
    };
    return (
        <div className="droplist">
            <div className="droplist-item" onClick={goToUtil}>
                <div className="text-wrapper" >Личный кабинет</div>
            </div>
            <div className="div" onClick={logout}>
                <div className="text-wrapper-2">Выйти</div>
            </div>
        </div>
    );
};