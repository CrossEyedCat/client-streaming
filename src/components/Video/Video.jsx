import React from "react";
import { IconMaximize1 } from "../../icons/IconMaximize1";
import { IconPlay } from "../../icons/IconPlay";
import { IconVolumeHigh } from "../../icons/IconVolumeHigh";
import "./style.css";

export const Video = ({ className }) => {
    return (
        <div className={`video ${className}`}>
            <div className="video-bar">
                <IconPlay className="icon-instance-node" color="white" />
                <div className="progress">
                    <div className="frame" />
                </div>

                <div className="frame-2">
                    <IconVolumeHigh className="icon-instance-node" color="white" />
                    <div className="frame-wrapper">
                        <div className="frame-3" />
                    </div>
                </div>

                <IconMaximize1 className="icon-instance-node" />
                <div className="ellipse" />

                <img
                    className="path"
                    alt="Path"
                    src="https://c.animaapp.com/upXxdJLR/img/path-2.svg"
                />
            </div>
        </div>
    );
};
