import React from "react";
import S from "./Header.module.css"
import {NavLink} from "react-router-dom";

export const HeaderPresent: React.FC = () => {

    return (
        <header className={S.header}>
            <img src={"https://logos-world.net/wp-content/uploads/2022/01/Joker-Logo.png"}/>
            <div className={S.loginBlock}>
                <NavLink to={"/login"}>
                    login
                </NavLink>
            </div>
        </header>
    )



}