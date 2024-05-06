import {AuthActionsType, AuthApiType, AuthPartDataType} from "./types"
import {api, authApi} from "api/Api"
import {Dispatch} from "redux"
import {stopSubmit} from "redux-form"
import {AppThunkActionType} from "redux/storeRedux"

// ACTION NAMES

const SET_USER_DATA = "auth/SET_USER_DATA"
const GET_CAPTCHA = "auth/GET-CAPTCHA"
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
        captcha: null
    },
}

export const authReducer = (
    subState: AuthPartDataType = initialSubState,
    action: AuthActionsType,
): AuthPartDataType => {
    switch (action.type) {
        case SET_USER_DATA: {
            // Transformation of "id" to "userId"
            const {id: userId, login, email} = action.payload.authDataFromApi
            const isAuth = action.payload.isAuth
            return {
                ...subState,
                authData: {
                    ...subState.authData,
                    userId,
                    login,
                    email,
                    isAuth
                },
            }
        }
        case GET_CAPTCHA:
            return {
                ...subState,
                authData: {
                    ...subState.authData,
                    captcha: action.payload.url
                }
            }
        default: {
            return subState
        }
    }
}

// ACTION CREATORS

/** ZA: setUserData ACTION CREATOR */
export const setUserDataAC = (authDataFromApi: AuthApiType["data"], isAuth: boolean) =>
    ({
        type: SET_USER_DATA,
        payload: {
            authDataFromApi,
            isAuth,
        },
    }) as const

/** ZA: getCaptcha ACTION CREATOR */
export const getCaptchaAC = (url: string) => ({
    type: GET_CAPTCHA,
    payload: {url}
}) as const

// THUNK CREATORS

/** ZA: setUserData THUNK CREATOR */
export const setUserData = () => async (dispatch: Dispatch) => {
    const data = await authApi.auth()
    data.resultCode === 0 && // checking: 0 means user exists
    dispatch(setUserDataAC(data.data, true))
}

export type setUserDataThunkType = ReturnType<typeof setUserData>

/** ZA: login THUNK CREATOR */
export const login =
    (email: string, password: string, rememberMe: boolean = false, captcha?:string): AppThunkActionType =>
        async (dispatch) => {
            const data = await authApi.login(email, password, rememberMe, captcha)
            if (data.resultCode === 0) {
                // checking: 0 means I'm login
                await dispatch(setUserData())
            } else {
                if (data.resultCode === 10) {
                    await dispatch(getCaptcha())
                }
                const errorMsg = data.messages.length ? data.messages[0] : "Some Error occurred."
                dispatch(stopSubmit("loginForm", {_error: errorMsg}))
            }
        }

/** ZA: logout THUNK CREATOR */
export const logout = () => async (dispatch: Dispatch) => {
    const data = await authApi.logout()
    if (data.resultCode === 0) {
        // checking: 0 means I'm login
        dispatch(setUserDataAC({id: null, login: null, email: null}, false))
    }
}

/** ZA: getCaptcha THUNK CREATOR */
export const getCaptcha = () => async (dispatch: Dispatch) => {
    const {url} = await authApi.getCaptcha()
    dispatch(getCaptchaAC(url))
}