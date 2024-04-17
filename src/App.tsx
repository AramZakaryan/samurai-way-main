import React, { Suspense } from "react"
import "./App.css"

import { BrowserRouter, HashRouter, Route, RouteComponentProps, withRouter } from "react-router-dom"
import { HeaderConnectContainer } from "components/Header/HeaderContainer"
import { Navbar } from "components/Navbat/Navbar"
import { ProfileCompose } from "components/Profile/ProfileContainer"
import { News } from "components/News/News"
import { Music } from "components/Music/Music"
import { Settings } from "components/Settings/Settings"
import { Friends } from "components/Friends/Friends"
import { LoginCompose } from "components/Login/LoginContainer"
import { connect, Provider } from "react-redux"
import { initializeApp } from "redux/appReducer"
import { stateReduxType, storeReduxType } from "redux/storeRedux"
import { Preloader } from "components/common/Preloader/Preloader"
import { compose } from "redux"
import { withSuspense } from "hoc/withSuspence"
import * as process from "process"
// import DialogsCompose from "components/Dialogs/DialogsContainer"
// import { UserCompose } from "components/Users/UsersContainer"

const DialogsCompose = React.lazy(() => import("components/Dialogs/DialogsContainer"))

const UserCompose = React.lazy(() =>
  import("components/Users/UsersContainer").then(({ UserCompose }) => ({ default: UserCompose })),
)

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
          {/*<Route path="/" />*/}
          <Route path={"/dialogs"} render={() => withSuspense(DialogsCompose)} />
          <Route path={"/news"} component={News} />
          <Route path={"/profile/:userId?"} render={() => <ProfileCompose />} />
          <Route path={"/music"} component={Music} />
          <Route path={"/settings"} component={Settings} />
          <Route path={"/friends"} component={Friends} />
          <Route path={"/users"} render={() => withSuspense(UserCompose)} />
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

const AppCompose = compose<React.ComponentType>(
  connect(mapStateToProps, { initializeApp }),
  withRouter,
)(App)

/** ZA: App decorated by Provider and BrowserRouter*/
export const AppDecorated: React.FC<{ store: storeReduxType }> = ({ store }) => {
  return (
    <Provider store={store}>
      <HashRouter>
      {/*<BrowserRouter>*/}
        <AppCompose />
      {/*</BrowserRouter>*/}
      </HashRouter>
    </Provider>
  )
}
