import React from "react";
import "./style.css";


export const Card_text = ({ className, title, content }) => {
    return (
        <div className={`card_text ${className}`}>
            <div className="text-wrapper-5">{title}</div>
            <p className="p">{content}</p>
        </div>
    );
};
