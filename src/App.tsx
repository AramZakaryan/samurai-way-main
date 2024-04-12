import React from "react"
import "./App.css"

import { Route, RouteComponentProps, withRouter } from "react-router-dom"
import { HeaderConnectContainer } from "components/Header/HeaderContainer"
import { Navbar } from "components/Navbat/Navbar"
import { DialogsCompose } from "components/Dialogs/DialogsContainer"
import { ProfileCompose } from "components/Profile/ProfileContainer"
import { News } from "components/News/News"
import { Music } from "components/Music/Music"
import { Settings } from "components/Settings/Settings"
import { Friends } from "components/Friends/Friends"
import { UserCompose } from "components/Users/UsersContainer"
import { LoginCompose } from "components/Login/LoginContainer"
import { connect } from "react-redux"
import { initializeApp } from "redux/appReducer"
import { stateReduxType } from "redux/storeRedux"
import { Preloader } from "components/common/Preloader/Preloader"
import { compose } from "redux"

type AppPropsType = {
  initializeApp: () => void
  initialized: boolean
} & RouteComponentProps

class App extends React.Component<AppPropsType> {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className={"app-wrapper"}>
        <HeaderConnectContainer />
        <Navbar />
        <div className={"app-wrapper-content"}>
          <Route path={"/profile/:userId?"} render={() => <ProfileCompose />} />
          <Route path={"/dialogs"} render={() => <DialogsCompose />} />
          <Route path={"/news"} component={News} />
          <Route path={"/music"} component={Music} />
          <Route path={"/settings"} component={Settings} />
          <Route path={"/friends"} component={Friends} />
          <Route path={"/users"} render={() => <UserCompose />} />
          <Route path={"/login"} render={() => <LoginCompose />} />
        </div>
      </div>
    )
  }
}

type mapStateToPropsType = Pick<AppPropsType, "initialized">
const mapStateToProps = (state: stateReduxType): mapStateToPropsType => ({
  initialized: state.app.initialized,
})

export default compose<React.ComponentType>(
  connect(mapStateToProps, { initializeApp }),
  withRouter,
)(App)
