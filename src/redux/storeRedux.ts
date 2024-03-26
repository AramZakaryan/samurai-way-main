import { applyMiddleware, combineReducers, compose } from "redux"
import { createStore } from "redux"
import { dialogsReducer } from "./dialogsReducer"
import { profileReducer } from "./profileReducer"
import { sidebarReducer } from "./sidebarReducer"
import { usersReducer } from "./usersReducer"
import { authReducer } from "./authReducer"
import thunkMiddleware, { ThunkAction } from "redux-thunk" ///// by default it was "thunk"
import { reducer as formReducer } from "redux-form"
import { AllActionsType } from "redux/types"
import { appReducer } from "redux/appReducer"

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

let rootReducer = combineReducers({
  profilePageData: profileReducer,
  dialogsPageData: dialogsReducer,
  sidebarData: sidebarReducer,
  usersPageData: usersReducer,
  authPartData: authReducer,
  form: formReducer,
  app: appReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export let storeRedux = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

// export type storeReduxType = typeof storeRedux

// My Solution
// export type stateReduxType = ReturnType<typeof store.getState>
// Alternative Solution
export type stateReduxType = ReturnType<typeof rootReducer>

export type AppThunkActionType<ReturnType = void> = ThunkAction<
  ReturnType,
  stateReduxType,
  unknown,
  AllActionsType
>
// Since a thunk can be dispatched in another thunk, AppThunkAction universal type
// is created by my base on ThunkAction from redux-thunk

// export type dispatchReduxType = typeof store.dispatch

// @ts-ignore
window.store = storeRedux
