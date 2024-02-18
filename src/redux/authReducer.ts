import {ActionType, AuthPartDataType, UsersPageDataType} from "./types";

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
        email: null
    }
}


export const authReducer = (subState: AuthPartDataType = initialSubState, action: ActionType): AuthPartDataType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...subState,
                authData: action.userData
            }
        }

        default: {
            return subState
        }
    }

}


// ACTION CREATORS   !!! without "AC"

export const setUserData = (userData: AuthPartDataType["authData"]) =>
    ({type: SET_USER_DATA, userData}) as const
