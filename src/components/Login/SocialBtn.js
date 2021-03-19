import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './SocialBtn.css';

const SocialBtn = (props) => {
    const { login, socialIcon, bgColor, loginName } = props;

    return (
        <button
            type="button"
            className="social-media-login w-75 d-block mx-auto my-2 py-2 rounded-pill"
            onClick={login}
        >
            <span className="social-icon" style={{ backgroundColor: bgColor }}>
                <FontAwesomeIcon icon={socialIcon} />
            </span>
            Continue with {loginName}
        </button>
    );
};

export default SocialBtn;
