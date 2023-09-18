import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {storeType} from "./redux/store"
import {store} from "./redux/store"
import "./forDel"


export const rerenderEntireThree = (store: storeType) => {
    ReactDOM.render(
        <App store={store}/>,
        document.getElementById('root')
    )
}

store.subscribe(rerenderEntireThree)

rerenderEntireThree(store) /* for First Rendering only*/
