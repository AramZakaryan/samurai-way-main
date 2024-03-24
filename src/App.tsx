import React from "react"
import "./App.css"

import { BrowserRouter, Route } from "react-router-dom"
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

const App: React.FC = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  )
}

export default App
