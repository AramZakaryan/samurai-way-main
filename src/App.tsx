import React from "react"
import "./App.css"

import { BrowserRouter, Route, withRouter } from "react-router-dom"
import { HeaderClassContainer, HeaderConnectContainer } from "components/Header/HeaderContainer"
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
import { stateReduxType } from "redux/storeRedux"
import { logout, setUserData } from "redux/authReducer"
import { compose } from "redux"

class App extends React.Component<{ setUserData: () => void }> {
  componentDidMount() {
    this.props.setUserData()
  }

  render() {
    return (
      <>
        <div className={"app-wrapper"}>
          <BrowserRouter>
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
          </BrowserRouter>
        </div>
      </>
    )
  }
}

export default connect(null, { setUserData })(App)
