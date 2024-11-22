import React from "react";
import "./style.css";

export const Card_text = ({ className }) => {
    return (
        <div className={`card ${className}`}>
            <div className="text-wrapper-5">Иванова Е.К.</div>

            <p className="p">
                Но некоторые особенности внутренней политики, которые представляют собой
                яркий пример континентально-европейского типа политической культуры,
                будут указаны как претенденты на роль ключевых факторов.
            </p>
        </div>
    );
};
