import { AllActionsType, getUserApiType, ProfileActionsType, ProfilePageDataType } from "./types"
import { profileApi, api } from "api/Api"
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
    case "profile/ADD-POST":
      return {
        ...subState,
        postsData: [
          ...subState.postsData,
          {
            // post to be added
            id: new Date().getTime(),
            title: action.newPostBody,
            likesCount: 0,
          },
        ],
      }
    case "profile/DELETE-POST":
      return {
        ...subState,
        postsData: subState.postsData.filter((p) => p.id !== action.postId),
      }
    case "profile/SET_USER_PROFILE":
      return {
        ...subState,
        userProfile: action.userProfile,
      }
    case "profile/GET_USER_STATUS":
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

/** P.S.(Aram) addPost ACTION CREATOR */
export const addPost = (newPostBody: string) => ({ type: "profile/ADD-POST", newPostBody }) as const

/** P.S.(Aram) addPost ACTION CREATOR */
export const deletePost = (postId: number) => ({ type: "profile/DELETE-POST", postId }) as const

/** P.S.(Aram) setUserProfile ACTION CREATOR */
export const setUserProfileAC = (userProfile: getUserApiType) =>
  ({ type: "profile/SET_USER_PROFILE", userProfile }) as const

/** P.S.(Aram) getUserStatus ACTION CREATOR */
export const setUserStatus = (status: null | string) =>
  ({ type: "profile/GET_USER_STATUS", status }) as const

//////////// THUNK CREATORS

/** P.S.(Aram) setUserProfile THUNK CREATOR */
export const setUserProfile = (userId: number) => async (dispatch: Dispatch) => {
  const data = await api.getUser(userId)
  return dispatch(setUserProfileAC(data))
}

/** P.S.(Aram) setUserStatus THUNK CREATOR */
export const getUserStatus = (userId: number) => async (dispatch: Dispatch) => {
  const data = await profileApi.getUserStatus(userId)
  return dispatch(setUserStatus(data.data))
}

export const updateUserStatus = (status: null | string) => async (dispatch: Dispatch) => {
  const data = await profileApi.updateMyStatus(status)
  if (data.data.resultCode === 0) {
    dispatch(setUserStatus(status))
  }
}
