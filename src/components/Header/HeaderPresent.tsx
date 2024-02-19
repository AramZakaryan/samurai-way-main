import React from "react";
import S from "./Header.module.css"
import {NavLink} from "react-router-dom";


type HeaderPresentPropsType = {
    authPartData: {
        authData: {
            userId: number | null
            login: string | null // = user name
            email: string | null
            isAuth: boolean
        }
    }
}

export const HeaderPresent: React.FC<HeaderPresentPropsType> = (props) => {
    const {login, isAuth, ...restProps} = props.authPartData.authData
    return (
        <header className={S.header}>
            <img src={"https://logos-world.net/wp-content/uploads/2022/01/Joker-Logo.png"}/>
            <div className={S.loginBlock}>
                {isAuth
                    ? login
                    : <NavLink to={"/login"}>
                        login
                    </NavLink>}
            </div>
        </header>
    )


}