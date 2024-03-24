import { connect } from "react-redux"
import { compose } from "redux"
import React from "react"
import {
  LoginPresentational,
  LoginPresentationalPropsType,
} from "components/Login/LoginPresentational"
import { login, logout } from "redux/authReducer"
import { stateReduxType } from "redux/storeRedux"

type MapStateToPropsType = Pick<LoginPresentationalPropsType, "authPartData">

type MapDispatchToPropsType = Pick<LoginPresentationalPropsType, "login" | "logout">

const mapStateToProps = (state: stateReduxType): MapStateToPropsType => {
  return {
    authPartData: state.authPartData,
  }
}

const mapDispatchToProps: MapDispatchToPropsType = {
  login,
  logout,
}

export const LoginCompose = compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
)(LoginPresentational)

/////////// General Structure
// LoginForm >>>
//    LoginPresentational >>>
//       LoginCompose
