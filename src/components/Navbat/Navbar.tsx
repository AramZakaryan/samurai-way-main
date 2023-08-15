import React from "react";
import S from "./Navbar.module.css"
import {NavLink} from "react-router-dom";



export const Navbar: React.FC =() => {

    return(
        <nav className={S.nav}>
            <div className={S.item}>
                <NavLink to={"/profile"} activeClassName={S.activeLink}>Profile</NavLink>
            </div>
            <div className={`${S.item} ${S.active}`}>
                <NavLink to={"/dialogs"} activeClassName={S.activeLink}>Messages</NavLink>
            </div>
            <div className={S.item}>
                <NavLink to={"/news"} activeClassName={S.activeLink}>News</NavLink>
            </div>
            <div className={S.item}>
                <NavLink to={"/music"} activeClassName={S.activeLink}>Music</NavLink>
            </div>
            <div className={S.item}>
                <NavLink to={"/settings"} activeClassName={S.activeLink}>Settings</NavLink>
                <a ></a>
            </div>
        </nav>
    )
}