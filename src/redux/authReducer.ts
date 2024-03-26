import { AuthActionsType, AuthApiType, AuthPartDataType } from "./types"
import { authApi } from "api/Api"
import { Dispatch } from "redux"
import { stopSubmit } from "redux-form"
import { AppThunkActionType } from "redux/storeRedux"

// ACTION NAMES

const SET_USER_DATA = "SET_USER_DATA"
// const UNFOLLOW = "UNFOLLOW"
// const SET_NEW_USERS = "SET_NEW_USERS"
// const SET_SELECTED_PAGE = "SET_SELECTED_PAGE"
// const SET_TOTAL_USER_COUNT = "SET_TOTAL_USER_COUNT"
// const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"

const initialSubState: AuthPartDataType = {
  authData: {
    userId: null,
    login: null, // = user name
    email: null,
    isAuth: false,
  },
}

export const authReducer = (
  subState: AuthPartDataType = initialSubState,
  action: AuthActionsType,
): AuthPartDataType => {
  switch (action.type) {
    case SET_USER_DATA: {
      // Transformation of "id" to "userId"
      const { id: userId, login, email } = action.payload.authDataFromApi
      const isAuth = action.payload.isAuth
      return {
        ...subState,
        authData: { userId, login, email, isAuth },
      }
    }

    default: {
      return subState
    }
  }
}

// ACTION CREATORS

/** P.S.(Aram) setUserData ACTION CREATOR
 */
export const setUserDataAC = (authDataFromApi: AuthApiType["data"], isAuth: boolean) =>
  ({
    type: SET_USER_DATA,
    payload: {
      authDataFromApi,
      isAuth,
    },
  }) as const

// THUNK CREATORS

/** P.S.(Aram) setUserData THUNK CREATOR
 */
export const setUserData = () => (dispatch: Dispatch) => {
  return authApi.auth().then((data) => {
    data.resultCode === 0 && // checking: 0 means user exists
      dispatch(setUserDataAC(data.data, true))
  })
}

export type setUserDataThunkType = ReturnType<typeof setUserData>

/** P.S.(Aram) login THUNK CREATOR
 */
export const login =
  (email: string, password: string, rememberMe: boolean = false): AppThunkActionType =>
  (dispatch) => {
    authApi.login(email, password, rememberMe).then((data) => {
      if (data.resultCode === 0) {
        // checking: 0 means I'm login
        dispatch(setUserData())
      } else {
        const errorMsg = data.messages.length ? data.messages[0] : "Some Error occurred."
        dispatch(stopSubmit("loginForm", { _error: errorMsg }))
      }
    })
  }

/** P.S.(Aram) logout THUNK CREATOR
 */
export const logout = () => (dispatch: Dispatch) => {
  authApi.logout().then((data) => {
    if (data.resultCode === 0) {
      // checking: 0 means I'm login
      dispatch(setUserDataAC({ id: null, login: null, email: null }, false))
    }
  })
}
