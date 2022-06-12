import React, { useReducer } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from '../hooks/useSelector';
import { initialState, NewsFilterReducer } from '../newsPosts/NewsFilterReducer';
import SearchNewsFilter from '../newsPosts/SearchNewsFilter';
import Username from './username/Username';
import { ReactComponent as LogoIcon } from "../../assets/logo.svg";
import { ReactComponent as LogoutIcon } from "../../assets/logout.svg";
import { ReactComponent as LoginIcon } from "../../assets/login.svg";

import "./Header.scss"
import { useActions } from '../hooks/useActions';
import { Link } from 'react-router-dom';

const getLinks = (logged: boolean) => ([
    { url: "/newsPosts", text: "News" },
    { url: "/registration", text: "Registration" },
    ...(!logged ? [] : [
        { url: "/blogsPosts", text: "Blogs" },
    ])
])
const Header: React.FC = () => {
    const [state, dispatch] = useReducer(NewsFilterReducer, initialState);
    const logged = useSelector(state => state.user.logged);
    const { removeUser } = useActions();
    const links = getLinks(logged);

    const handleLogout = () => {
        removeUser()
    }
    return (
        <nav className="header-container">
            <div className="logo">
                <LogoIcon />
                <div className="app-name">
                    Space World
                </div>
            </div>
            <ul className="links">
                {links.map(({ url, text }) =>
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
                {logged ?
                    <>
                        <LogoutIcon
                            className='icon-button'
                            onClick={handleLogout} />
                        <Username />
                    </>
                    :
                    <Link to="/login">
                        <LoginIcon
                            className='icon-button'
                            onClick={handleLogout} />
                        <Username />
                    </Link>
                }
            </div>
        </nav >
    );
};
export default Header;