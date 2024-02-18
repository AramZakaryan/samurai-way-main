import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbat/Navbar";
import {ProfilePresentational} from "./components/Profile/ProfilePresentational";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {Friends} from "./components/Friends/Friends";
import {DialogsConnectContainer} from "./components/Dialogs/DialogsConnectContainer";
// import {Users} from "./components/Users/Users";
import {UsersConnectContainer} from "./components/Users/UsersContainer";
import {ProfileClassContainer, ProfileConnectContainer} from "./components/Profile/ProfileContainer";


const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    {/*<Route path={"/profile"} render={() => <Profile/>}/>*/}
                    <Route path={"/profile"} render={() => <ProfileConnectContainer/>}/>
                    <Route path={"/dialogs"} render={() => <DialogsConnectContainer/>}/>
                    <Route path={"/news"} component={News}/>
                    <Route path={"/music"} component={Music}/>
                    <Route path={"/settings"} component={Settings}/>
                    <Route path={"/friends"} component={Friends}/>
                    <Route path={"/users"} render={()=><UsersConnectContainer/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
