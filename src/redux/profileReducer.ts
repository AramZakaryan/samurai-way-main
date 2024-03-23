import { AllActionsType, getUserApiType, ProfileActionsType, ProfilePageDataType } from "./types"
import { profileApi, userApi } from "../api/userApi"
import { Dispatch } from "redux"

const initialSubState: ProfilePageDataType = {
  postsData: [
    { id: 1, title: "Hi, How are you?", likesCount: 0 },
    { id: 2, title: "It's my first post", likesCount: 23 },
  ],
  userProfile: null,
  postTextAreaEnteringValue: "",
  status: null,
}

export const profileReducer = (
  subState: ProfilePageDataType = initialSubState,
  action: ProfileActionsType,
): ProfilePageDataType => {
  switch (action.type) {
    case "ADD-POST":
      return {
        ...subState,
        postsData: [
          ...subState.postsData,
          {
            // post to be added
            id: new Date().getTime(),
            title: subState.postTextAreaEnteringValue,
            likesCount: 0,
          },
        ],
        postTextAreaEnteringValue: "",
      }
    case "UPDATE-POST-TEXTAREA-VALUE":
      return {
        ...subState,
        postTextAreaEnteringValue: action.enteringValue,
      }
    case "SET_USER_PROFILE":
      return {
        ...subState,
        userProfile: action.userProfile,
      }
    case "GET_USER_STATUS":
      return {
        ...subState,
        status: action.status,
      }
    default: {
      return subState
    }
  }
}

////////// ACTION CREATORS

/** P.S.(Aram) addPost ACTION CREATOR
 */
export const addPost = () => ({ type: "ADD-POST" }) as const

/** P.S.(Aram) updatePostTextAreaValue ACTION CREATOR
 */
export const updatePostTextAreaValue = (enteringValue: string) =>
  ({ type: "UPDATE-POST-TEXTAREA-VALUE", enteringValue: enteringValue }) as const

/** P.S.(Aram) setUserProfile ACTION CREATOR
 */
export const setUserProfileAC = (userProfile: getUserApiType) =>
  ({ type: "SET_USER_PROFILE", userProfile }) as const

/** P.S.(Aram) getUserStatus ACTION CREATOR
 */
export const setUserStatus = (status: null | string) =>
  ({ type: "GET_USER_STATUS", status }) as const

//////////// THUNK CREATORS

/** P.S.(Aram) setUserProfile THUNK CREATOR
 */
export const setUserProfile = (userId: number) => (dispatch: Dispatch) => {
  userApi.getUser(userId).then((data) => dispatch(setUserProfileAC(data)))
}

/** P.S.(Aram) setUserStatus THUNK CREATOR
 */
export const getUserStatus = (userId: number) => (dispatch: Dispatch) => {
  profileApi.getUserStatus(userId).then((data) => dispatch(setUserStatus(data.data)))
}

export const updateUserStatus = (status: null | string) => (dispatch: Dispatch) => {
  profileApi.updateMyStatus(status).then((data) => {
    if (data.data.resultCode === 0) {
      dispatch(setUserStatus(status))
    }
  })
}
