import React, {useState} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbat/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";

type AppPropsType = {
    dialogsData: {
        name: string
        id: number
    }[]
    messagesData: {
        message: string
    }[]
    postsData: {
        id: number
        message: string
        likesCount: number
    }[]
}


const App: React.FC<AppPropsType> = (props) => {
    let [active, setActive] = useState("profile")
    console.log(active)
    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    <Route path={"/profile"}
                           render={() => <Profile postsData={props.postsData}/>}/>
                    <Route path={"/dialogs"}
                           render={() => <Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/>}/>
                    <Route path={"/news"} component={News}/>
                    <Route path={"/music"} component={Music}/>
                    <Route path={"/settings"} component={Settings}/>


                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
