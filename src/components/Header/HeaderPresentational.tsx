import React from "react"
import S from "./Header.module.css"
import { NavLink } from "react-router-dom"
import { AuthPartDataType } from "redux/types"

type HeaderPresentPropsType = {
  authPartData: AuthPartDataType
  logout: () => void
}

export const HeaderPresentational: React.FC<HeaderPresentPropsType> = (props) => {
  const { login, isAuth, ...restProps } = props.authPartData.authData
  const logoutHandler = () => {
    props.logout()
  }
  return (
    <header className={S.header}>
      <img src={"https://logos-world.net/wp-content/uploads/2022/01/Joker-Logo.png"} />
      <div className={S.loginBlock}>
        {isAuth ? (
          <div>
            {login} <button onClick={logoutHandler}>logout</button>
          </div>
        ) : (
          <NavLink to={"/Login"}>login</NavLink>
        )}
      </div>
    </header>
  )
}
