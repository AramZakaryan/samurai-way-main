import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {stateType, storeType} from "./redux/store"
import "./redux/storeRedux"
// import {store} from "./redux/store"
import {store} from "./redux/storeRedux"
import "./forDel"
import {BrowserRouter} from "react-router-dom";


export const rerenderEntireThree = (state: stateType) => {
    ReactDOM.render(
        <App store={store}/>
        ,
        document.getElementById('root')
    )
}


store.subscribe(()=> {
    rerenderEntireThree(store.getState())
})

rerenderEntireThree(store.getState()) /* for First Rendering only*/
