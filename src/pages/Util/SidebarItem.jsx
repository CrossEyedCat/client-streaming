import PropTypes from "prop-types";
import React from "react";
import { IconSettingsFill1 } from "../../icons/IconSettingsFill1";
import "./style1.css";

export const SidebarItem = ({
                                showIcon2 = true,
                                showIcon = true,
                                status,
                                className,
                                text = "Текст",
                                icon = <IconSettingsFill1 className="icon-settings-fill" color="#9EA0A5" />,
                            }) => {
    return (
        <div className={`sidebar-item ${status} ${className}`}>
            {icon}
            <div className="text-wrapper-4">{text}</div>
        </div>
    );
};

SidebarItem.propTypes = {
    showIcon2: PropTypes.bool,
    showIcon: PropTypes.bool,
    status: PropTypes.oneOf(["default", "activ"]),
    text: PropTypes.string,
};
