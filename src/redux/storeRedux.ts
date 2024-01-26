
import {combineReducers} from "redux";
import {createStore} from "redux";
import {dialogsReducer} from "./dialogsReducer";
import {profileReducer} from "./profileReducer";
import {sidebarReducer} from "./sidebarReducer";
import {usersReducer} from "./usersReducer";

let rootReducer = combineReducers({
    profilePageData: profileReducer,
    dialogsPageData: dialogsReducer,
    sidebarData: sidebarReducer,
    usersData: usersReducer
})

export let store = createStore(rootReducer)

export type storeReduxType = typeof store

// My Solution
// export type stateReduxType = ReturnType<typeof store.getState>
// Alternative Solution
export type stateReduxType = ReturnType<typeof rootReducer>

// export type dispatchReduxType = typeof store.dispatch


// @ts-ignore
window.store= store


