import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbat/Navbar";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {Friends} from "./components/Friends/Friends";
// import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {DialogsConnectContainer} from "./components/Dialogs/DialogsConnectContainer";

// type AppPropsType = {
//     store: storeReduxType
// }


// const App: React.FC<AppPropsType> = (props) => {
const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    <Route path={"/profile"}
                        // render={() => <Profile profilePageData={props.store.getState().profilePageData}
                        //                        dispatch={props.store.dispatch.bind(props.store)}
                           render={() => <Profile
                           />
                           }
                    />

                    <Route path={"/dialogs"}
                        // render={() => <Dialogs dialogsPageData={props.store.getState().dialogsPageData}
                        //                        dispatch={props.store.dispatch.bind(props.store)}
                        //    render={() => <DialogsContainer dialogsPageData={props.store.getState().dialogsPageData}
                        //                           dispatch={props.store.dispatch.bind(props.store)}
                        //    render={() => <DialogsContainer store={props.store}
                           render={() => <DialogsConnectContainer
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
