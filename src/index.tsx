import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
    storeType,
    subscriber,
} from "./redux/store"
import {store} from "./redux/store"
import "./forDel"


export const rerenderEntireThree_Original = (state: storeType) => {
    ReactDOM.render(
        <App state={state}/>,
        document.getElementById('root')
    )
}

subscriber(rerenderEntireThree_Original)

rerenderEntireThree_Original(store) /* for First Rendering only*/
