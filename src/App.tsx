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
import {storeType} from "./redux/store";

type AppPropsType = {
    store: storeType
}


const App: React.FC<AppPropsType> = (props) => {
    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    <Route path={"/profile"}
                           render={() => <Profile profilePageData={props.store.getState().profilePageData}
                                                  dispatch={props.store.dispatch.bind(props.store)}
                           />
                           }
                    />
                    <Route path={"/dialogs"}
                           render={() => <Dialogs dialogsPageData={props.store.getState().dialogsPageData}
                                                  dispatch={props.store.dispatch.bind(props.store)}

                           />
                           }
                    />
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
