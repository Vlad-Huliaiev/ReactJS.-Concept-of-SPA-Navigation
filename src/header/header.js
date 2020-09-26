import React from "react";
import {Menu} from "../App";
import './header.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return(
        <div className="header-wrapper">
            {Menu.map((menuItem) => (
                <NavLink to={menuItem.title}
                    className="header-menu-item">
                    {menuItem.title}
                </NavLink>
            ))}
            </div>
    )
}

export default Header;