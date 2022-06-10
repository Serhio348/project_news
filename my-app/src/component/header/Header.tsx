import React, { useReducer } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as LogoIcon } from "../../assets/logo.svg";
import { initialState, NewsFilterReducer } from '../newsPosts/NewsFilterReducer';
import SearchNewsFilter from '../newsPosts/SearchNewsFilter';


import "./Header.scss"

const LINKS = [
    { url: "/newsPosts", text: "News" },
    { url: "/blogsPosts", text: "Blogs" },
    { url: "/login", text: "Login" },
    { url: "/registration", text: "Registration" }
]
const Header: React.FC = () => {
    const [state, dispatch] = useReducer(NewsFilterReducer, initialState)

    return (
        <nav className="header-container">
            <div className="logo">
                <LogoIcon />
                <div className="app-name">
                    Space World
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
            <div className='seach-news'>
                <div className='logo-seach'>
                    <SearchNewsFilter
                        dispatch={dispatch}
                        state={state}
                    />
                </div>
            </div>
        </nav >
    );
};
export default Header;