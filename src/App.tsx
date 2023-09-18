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
    // let [active, setActive] = useState("profile")
    // console.log(active)
    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    <Route path={"/profile"}
                           render={() => <Profile profilePageData={props.store._state.profilePageData}
                                                  addPost={props.store.addPost.bind(props.store)}
                                                  updatePostTextAreaValue={props.store.updatePostTextAreaValue.bind(props.store)}
                           />
                           }
                    />
                    <Route path={"/dialogs"}
                           render={() => <Dialogs dialogsPageData={props.store._state.dialogsPageData}
                                                  addMessage={props.store.addMessage.bind(props.store)}
                                                  updateMessageTextareaValue={props.store.updateMessageTextareaValue.bind(props.store)}

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
