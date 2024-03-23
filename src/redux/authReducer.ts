import {
  AllActionsType,
  AuthActionsType,
  AuthApiType,
  AuthPartDataType,
  UsersPageDataType,
} from "./types"
import { userApi, authApi } from "../api/userApi"
import { Dispatch } from "redux"

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
      const { id: userId, login, email } = action.authDataFromApi
      return {
        ...subState,
        authData: { userId, login, email, isAuth: true },
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
export const setUserDataAC = (authDataFromApi: AuthApiType["data"]) =>
  ({ type: SET_USER_DATA, authDataFromApi }) as const

// THUNK CREATORS

/** P.S.(Aram) setUserData THUNK CREATOR
 */
export const setUserData = () => (dispatch: Dispatch) => {
  authApi.auth().then((data) => {
    data.resultCode === 0 && // checking: 0 means user exists
      dispatch(setUserDataAC(data.data))
  })
}
