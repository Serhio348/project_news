import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoIcon } from "../../assets/logo.svg";

import "./Header.scss"

const Header: React.FC = () => {
    return (

        <nav className="header-container">
            <div className="logo">
                <LogoIcon />
                <div className="app-name">
                    Space News
                </div>
            </div>

            <ul className="links">
                <li>
                    <NavLink to="/newsPosts" className={({ isActive }) => isActive ? "_active" : ""}>News</NavLink>
                </li>
                <li>
                    <NavLink to="/login" className={({ isActive }) => isActive ? "_active" : ""}>Login</NavLink>
                </li>
                <li>
                    <NavLink to="/registration" className={({ isActive }) => isActive ? "_active" : ""}>Registration</NavLink>
                </li>

            </ul>
        </nav>

    );
};

export default Header;