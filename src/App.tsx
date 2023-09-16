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
import {stateType, updateMessageTextareaValue, updatePostTextAreaValue} from "./redux/state";

type AppPropsType = {
    state: stateType
    addPost: (postMessage: string) => void
    updatePostTextAreaValue: (enteringValue: string) => void
    addMessage: () => void
    updateMessageTextareaValue: (enteringValue: string) => void
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
                           render={() => <Profile profilePageData={props.state.profilePageData}
                                                  addPost={props.addPost}
                                                  updatePostTextAreaValue={props.updatePostTextAreaValue}
                           />
                           }
                    />
                    <Route path={"/dialogs"}
                           render={() => <Dialogs dialogsPageData={props.state.dialogsPageData}
                                                  addMessage={props.addMessage}
                                                  updateMessageTextareaValue={props.updateMessageTextareaValue}

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
