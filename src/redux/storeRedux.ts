import {combineReducers} from "redux";
import {createStore} from "redux";
import {dialogsReducer} from "./dialogsReducer";
import {profileReducer} from "./profileReducer";
import {sidebarReducer} from "./sidebarReducer";

let rootReducer = combineReducers({
    profilePageData: profileReducer,
    dialogsPageData: dialogsReducer,
    sidebarData: sidebarReducer
})

export let store = createStore(rootReducer)

export type storeReduxType = typeof store

// My Solution
// export type stateReduxType = ReturnType<typeof store.getState>
// Alternative Solution
export type stateReduxType = ReturnType<typeof rootReducer>

export type dispatchReduxType = typeof store.dispatch
