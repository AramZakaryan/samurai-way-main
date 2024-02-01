
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
    usersPageData: usersReducer
})

export let storeRedux = createStore(rootReducer)

export type storeReduxType = typeof storeRedux

// My Solution
// export type stateReduxType = ReturnType<typeof store.getState>
// Alternative Solution
export type stateReduxType = ReturnType<typeof rootReducer>

// export type dispatchReduxType = typeof store.dispatch


// @ts-ignore
window.store= storeRedux


