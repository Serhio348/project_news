import React from 'react';
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as LogoutIcon } from "../../assets/logout.svg";
import { ReactComponent as LoginIcon } from "../../assets/login.svg";

import "./Header.scss"
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (

        <nav className="header-container">
            <div className="logo">
                <Logo />
                <div className="app-name">
                    World News
                </div>
            </div>

            <ul className="links">
                <li>
                    <a href="/">Country</a>
                </li>
                <li>
                    <a href="/">Category</a>
                </li>
                <li>
                    <a href="/">My news</a>
                </li>

            </ul>
            <div className="controls">
                {logged ?
                    <>
                        <LogoutIcon onClick={handleLogout} className="icon-button logout-button" />
                        <Username />
                    </>
                    :
                    <Link to="../login">
                        <LoginIcon onClick={handleLogout} className="icon-button logout-button" />
                    </Link>
                }
            </div>


        </nav>

    );
};

export default Header;