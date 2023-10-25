import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./redux/storeRedux"
import {store, storeReduxType} from "./redux/storeRedux"
import "./forDel"
import {Provider} from "./redux/storeContext";


export const rerenderEntireThree = (store: storeReduxType) => {
    ReactDOM.render(
        // <StoreContext.Provider value={store}>
        //     <App/>
        // </StoreContext.Provider>

        <Provider store={store}>
            <App/>
        </Provider>
        ,
        document.getElementById('root')
    )
}


store.subscribe(() => {
    rerenderEntireThree(store)
})

rerenderEntireThree(store) /* for First Rendering only*/

console.log(store)