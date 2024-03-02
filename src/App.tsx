import React from 'react';
import './App.css';
import {HeaderPresent} from "./components/Header/HeaderPresent";
import {Navbar} from "./components/Navbat/Navbar";
import {ProfilePresentational} from "./components/Profile/ProfilePresentational";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {Friends} from "./components/Friends/Friends";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
// import {Users} from "./components/Users/Users";
import {UsersConnectContainer} from "./components/Users/UsersContainer";
import {ProfileClassContainer, ProfileConnectContainer} from "./components/Profile/ProfileContainer";
import {HeaderClassContainer, HeaderConnectContainer} from "./components/Header/HeaderContainer";
import {Login} from "./components/login/login";


const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <HeaderConnectContainer/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    <Route path={"/profile/:userId?"} render={() => <ProfileConnectContainer/>}/>
                    <Route path={"/dialogs"} render={() => <DialogsContainer/>}/>
                    <Route path={"/news"} component={News}/>
                    <Route path={"/music"} component={Music}/>
                    <Route path={"/settings"} component={Settings}/>
                    <Route path={"/friends"} component={Friends}/>
                    <Route path={"/users"} render={()=><UsersConnectContainer/>}/>
                    <Route path={"/login"} render={() => <Login/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
