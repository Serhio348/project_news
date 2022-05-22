import React from 'react';
import { Link } from 'react-router-dom';
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
                    <Link to="/newsPosts">News Space</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <a href="/">My news</a>
                </li>

            </ul>
        </nav>

    );
};

export default Header;