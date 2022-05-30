import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as LogoIcon } from "../../assets/logo.svg";

import "./Header.scss"

const LINKS = [
    { url: "/newsPosts", text: "News" },
    { url: "/login", text: "Login" },
    { url: "/registration", text: "Registration" }

]
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
                {LINKS.map(({ url, text }) =>
                    <li key={url + text}>
                        <NavLink to={url} className={({ isActive }) => isActive ? "_active" : ""}>
                            {text}
                        </NavLink>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Header;