import PropTypes from "prop-types";
import React from "react";

export const IconMessage1 = ({ color = "#7047E8", className }) => {
    return (
        <svg
            className={`icon-message-1 ${className}`}
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                className="path"
                clipRule="evenodd"
                d="M9.96834 3.2998H14.0313C15.4048 3.2998 16.4785 3.2998 17.3408 3.37025C18.2178 3.44191 18.9376 3.58992 19.5876 3.92107C20.6601 4.46755 21.5321 5.33954 22.0785 6.41206C22.4097 7.06197 22.5577 7.78176 22.6294 8.65881C22.6998 9.52113 22.6998 10.5949 22.6998 11.9684V12.0312C22.6998 13.4047 22.6998 14.4785 22.6294 15.3408C22.5577 16.2178 22.4097 16.9376 22.0785 17.5876C21.5321 18.6601 20.6601 19.5321 19.5876 20.0785C18.9376 20.4097 18.2178 20.5577 17.3408 20.6294C16.4785 20.6998 15.4047 20.6998 14.0312 20.6998H9.96839C8.59486 20.6998 7.52113 20.6998 6.65881 20.6294C5.78176 20.5577 5.06197 20.4097 4.41206 20.0785C3.33954 19.5321 2.46755 18.6601 1.92107 17.5876C1.58992 16.9376 1.44191 16.2178 1.37025 15.3408C1.2998 14.4785 1.2998 13.4048 1.2998 12.0313V11.9683C1.2998 10.5948 1.2998 9.52112 1.37025 8.65881C1.44191 7.78176 1.58992 7.06197 1.92107 6.41206C2.46755 5.33954 3.33954 4.46755 4.41206 3.92107C5.06197 3.58992 5.78176 3.44191 6.65881 3.37025C7.52112 3.2998 8.59484 3.2998 9.96834 3.2998ZM6.77282 4.7656C5.98235 4.83019 5.4673 4.95465 5.04765 5.16848C4.23855 5.58073 3.58073 6.23855 3.16848 7.04765C2.95465 7.4673 2.83019 7.98235 2.7656 8.77282C2.70035 9.57146 2.6998 10.5881 2.6998 11.9998C2.6998 13.4115 2.70035 14.4281 2.7656 15.2268C2.83019 16.0173 2.95465 16.5323 3.16848 16.952C3.58073 17.7611 4.23855 18.4189 5.04765 18.8311C5.4673 19.045 5.98235 19.1694 6.77282 19.234C7.57146 19.2993 8.58812 19.2998 9.9998 19.2998H13.9998C15.4115 19.2998 16.4281 19.2993 17.2268 19.234C18.0173 19.1694 18.5323 19.045 18.952 18.8311C19.7611 18.4189 20.4189 17.7611 20.8311 16.952C21.045 16.5323 21.1694 16.0173 21.234 15.2268C21.2993 14.4281 21.2998 13.4115 21.2998 11.9998C21.2998 10.5881 21.2993 9.57146 21.234 8.77282C21.1694 7.98235 21.045 7.4673 20.8311 7.04765C20.4189 6.23855 19.7611 5.58073 18.952 5.16848C18.5323 4.95465 18.0173 4.83019 17.2268 4.7656C16.4281 4.70035 15.4115 4.6998 13.9998 4.6998H9.9998C8.58812 4.6998 7.57146 4.70035 6.77282 4.7656Z"
                fill={color}
                fillRule="evenodd"
            />

            <path
                className="path"
                clipRule="evenodd"
                d="M5.46464 8.08326C5.69583 7.7734 6.13443 7.70963 6.44429 7.94082L12.0359 12.1128L17.5518 7.94344C17.8602 7.71032 18.2992 7.77136 18.5323 8.07977C18.7655 8.38817 18.7044 8.82717 18.396 9.06028L12.4607 13.5466C12.2123 13.7344 11.8696 13.7355 11.62 13.5492L5.60708 9.06291C5.29722 8.83172 5.23345 8.39311 5.46464 8.08326Z"
                fill={color}
                fillRule="evenodd"
            />
        </svg>
    );
};

IconMessage1.propTypes = {
    color: PropTypes.string,
};
