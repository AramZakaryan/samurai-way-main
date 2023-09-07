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
import {Friends} from "./components/Friends/Friends";

type AppPropsType = {
    state: {
        profilePageData: {
            postsData: {
                id: number
                message: string
                likesCount: number
            } []
        }
        dialogsPageData: {
            dialogsData: {
                id: number
                name: string
            }[]
            messagesData: {
                id: number
                message: string
            } []
        }
        sidebarData: {
        }
    }
    addPost: (postMessage:string)=>void
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
                           render={() => <Profile data={props.state.profilePageData} addPost={props.addPost}/>}/>
                    <Route path={"/dialogs"}
                           render={() => <Dialogs data={props.state.dialogsPageData}/>}/>
                    <Route path={"/news"} component={News}/>
                    <Route path={"/music"} component={Music}/>
                    <Route path={"/settings"} component={Settings}/>
                    <Route path={"/friends"} component={Friends}/>


                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
