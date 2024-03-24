import React from "react"
import { HeaderPresentational } from "components/Header/HeaderPresentational"
import { connect } from "react-redux"
import { stateReduxType } from "redux/storeRedux"
import { AuthPartDataType } from "redux/types"
import { logout, setUserData } from "redux/authReducer"

type HeaderClassContainerPropsType = {
  authPartData: AuthPartDataType
  setUserData: () => void
  logout: () => void
}

export class HeaderClassContainer extends React.Component<HeaderClassContainerPropsType, any> {
  constructor(props: HeaderClassContainerPropsType) {
    super(props)
  }

  componentDidMount() {
    // this.props.setUserData()
  }

  render() {
    return <HeaderPresentational {...this.props} />
  }
}

type MapStateToPropsType = Pick<HeaderClassContainerPropsType, "authPartData">

type MapDispatchToPropsType = Pick<HeaderClassContainerPropsType, "setUserData" | "logout">

const mapStateToProps = (state: stateReduxType): MapStateToPropsType => ({
  authPartData: state.authPartData,
})

const mapDispatchToProps: MapDispatchToPropsType = {
  setUserData,
  logout,
}

export const HeaderConnectContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderClassContainer)
