import {combineReducers} from "redux";
import {createStore} from "redux";
import {dialogsReducer} from "./dialogsReducer";
import {profileReducer} from "./profileReducer";
import {sidebarReducer} from "./sidebarReducer";

let reducers = combineReducers({
    profilePageData: profileReducer,
    dialogsPageData: dialogsReducer,
    sidebarData: sidebarReducer
})

export let store = createStore(reducers)

export type storeReduxType = typeof store
