import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbat/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {Friends} from "./components/Friends/Friends";
import {DialogsCompose} from "./components/Dialogs/DialogsContainer";
import {UserCompose} from "./components/Users/UsersContainer";
import { ProfileCompose} from "./components/Profile/ProfileContainer";
import { HeaderConnectContainer} from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";


const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <HeaderConnectContainer/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    <Route path={"/profile/:userId?"} render={() => <ProfileCompose/>}/>
                    <Route path={"/dialogs"} render={()=><DialogsCompose/>}/>
                    <Route path={"/news"} component={News}/>
                    <Route path={"/music"} component={Music}/>
                    <Route path={"/settings"} component={Settings}/>
                    <Route path={"/friends"} component={Friends}/>
                    <Route path={"/users"} render={()=><UserCompose/>}/>
                    <Route path={"/login"} render={() => <Login/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
