import React from "react";
import {MENU} from "../App";
import './header.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return(
        <div className="header-wrapper">
            {MENU.map((menuItem) => (
                <NavLink to={menuItem.title}
                    className="header-menu-item">
                    {menuItem.title}
                </NavLink>
            ))}
            </div>
    )
}

export default Header;