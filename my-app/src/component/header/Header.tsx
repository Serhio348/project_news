import React from 'react';
import { ReactComponent as LogoIcon } from "../../assets/logo.svg";

import "./Header.scss"

const Header: React.FC = () => {
    return (

        <nav className="header-container">
            <div className="logo">
                <LogoIcon />
                <div className="app-name">
                    World News
                </div>
            </div>

            <ul className="links">
                <li>
                    <a href="/">News Space</a>
                </li>
                <li>
                    <a href="/">Category</a>
                </li>
                <li>
                    <a href="/">My news</a>
                </li>

            </ul>
        </nav>

    );
};

export default Header;