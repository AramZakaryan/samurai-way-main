import {AllActionsType, GetUserApiType, ProfileActionsType, ProfilePageDataType} from "./types"
import {profileApi, api} from "api/Api"
import {Dispatch} from "redux"
import {login} from "./authReducer";
import {stopSubmit} from "redux-form";

const initialSubState: ProfilePageDataType = {
    postsData: [
        {id: 1, title: "Hi, How are you?", likesCount: 0},
        {id: 2, title: "It's my first post", likesCount: 23},
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
        case "profile/UPDATE_USER_PHOTO":
            return {
                ...subState,
                userProfile: subState.userProfile && {
                    ...subState.userProfile,
                    photos: {
                        ...subState.userProfile.photos,
                        large: action.image
                    }
                }
            }
        case "profile/UPDATE_USER_PROFILE":
            return {
                ...subState,
                userProfile: subState.userProfile && {
                    ...subState.userProfile,
                    ...action.formData
                }
            }

        default: {
            return subState
        }
    }
}

////////// ACTION CREATORS

/** P.S.(Aram) addPost ACTION CREATOR */
export const addPost = (newPostBody: string) => ({type: "profile/ADD-POST", newPostBody}) as const

/** P.S.(Aram) addPost ACTION CREATOR */
export const deletePost = (postId: number) => ({type: "profile/DELETE-POST", postId}) as const

/** P.S.(Aram) setUserProfile ACTION CREATOR */
export const setUserProfileAC = (userProfile: GetUserApiType) =>
    ({type: "profile/SET_USER_PROFILE", userProfile}) as const

/** P.S.(Aram) getUserStatus ACTION CREATOR */
export const setUserStatus = (status: null | string) =>
    ({type: "profile/GET_USER_STATUS", status}) as const

/** P.S.(Aram) updateUserPhoto ACTION CREATOR */
export const updateUserPhotoAC = (imageUrl: string | null) =>
    ({type: "profile/UPDATE_USER_PHOTO", image: imageUrl}) as const

/** P.S.(Aram) updateUserProfile ACTION CREATOR */
export const updateUserProfileAC = (formData: any) =>
    ({type: "profile/UPDATE_USER_PROFILE", formData}) as const


//////////// THUNK CREATORS

/** P.S.(Aram) setUserProfile THUNK CREATOR */
export const setUserProfile = (userId: number) => async (dispatch: Dispatch) => {
    const response = await api.getUser(userId)
    return dispatch(setUserProfileAC(response))
}

/** P.S.(Aram) setUserStatus THUNK CREATOR */
export const getUserStatus = (userId: number) => async (dispatch: Dispatch) => {
    const response = await profileApi.getUserStatus(userId)
    return dispatch(setUserStatus(response.data))
}

/** P.S.(Aram) updateUserStatus THUNK CREATOR */
export const updateUserStatus = (status: null | string) => async (dispatch: Dispatch) => {
    const data = await profileApi.updateMyStatus(status)
    if (data.resultCode === 0) {
        dispatch(setUserStatus(status))
    }
}

/** P.S.(Aram) updateUserPhoto THUNK CREATOR */
export const updateUserPhoto = (imageFile: File) => async (dispatch: Dispatch) => {
    const {resultCode, data: {photos: {large}}} = await profileApi.updateMyPhoto(imageFile)
    if (resultCode === 0) {
        dispatch(updateUserPhotoAC(large))
    }
    // const data = await profileApi.updateMyPhoto(imageFile)
    // if (data.resultCode === 0) {
    //     dispatch(updateUserPhotoAC(data.data.photos.large))
    // }
}

/** P.S.(Aram) saveProfile THUNK CREATOR */
export const updateUserProfile = (formData: any) => async (dispatch: Dispatch) => {
    const {resultCode,messages} = await profileApi.updateMyProfile(formData)
    if (resultCode === 0) {
         dispatch(updateUserProfileAC(formData))
    }
    else {
        const errorMsg = messages.length ? messages[0] : "Undefined Error Occurred."
          dispatch(stopSubmit("profileDataForm", {_error: errorMsg}))
    }
    return resultCode
}

// export const saveProfile = (formData: any) => {
//     console.log(formData)
// }

