
import {combineReducers, compose} from "redux";
import {createStore} from "redux";
import {dialogsReducer} from "./dialogsReducer";
import {profileReducer} from "./profileReducer";
import {sidebarReducer} from "./sidebarReducer";
import {usersReducer} from "./usersReducer";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

let rootReducer = combineReducers({
    profilePageData: profileReducer,
    dialogsPageData: dialogsReducer,
    sidebarData: sidebarReducer,
    usersPageData: usersReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export let storeRedux = createStore(rootReducer, composeEnhancers())

export type storeReduxType = typeof storeRedux

// My Solution
// export type stateReduxType = ReturnType<typeof store.getState>
// Alternative Solution
export type stateReduxType = ReturnType<typeof rootReducer>

// export type dispatchReduxType = typeof store.dispatch


// @ts-ignore
window.store= storeRedux


