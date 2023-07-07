import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Nav/Nav";
import {Profile} from "./components/Profile/Profile";

const App: React.FC = () => {
    return (
        <div className={"app-wrapper"}>
            <Header/>
            <Nav/>
<Profile/>
        </div>
    );
}


export default App;
