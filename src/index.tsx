import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {stateType, storeType} from "./redux/store"
import "./redux/storeRedux"
// import {store} from "./redux/store"
import {store, storeReduxType} from "./redux/storeRedux"
import "./forDel"
import {BrowserRouter} from "react-router-dom";


export const rerenderEntireThree = (store:storeReduxType) => {
    ReactDOM.render(
        <App store={store}/>
        ,
        document.getElementById('root')
    )
}


store.subscribe(()=> {
    rerenderEntireThree(store)
})

rerenderEntireThree(store) /* for First Rendering only*/

console.log(store)