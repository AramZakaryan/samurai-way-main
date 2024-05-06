import {
    addPost,
    deletePost,
    setUserProfileAC,
    setUserStatus,
    updateUserPhotoAC,
    updateUserProfileAC
} from "./profileReducer"
import {addMessageAC} from "./dialogsReducer"
import {
    followAC,
    getUsersAC,
    setSelectedPage,
    setTotalUserCount,
    toggleIsFetching,
    toggleIsFollowingInProgress,
    unfollowAC,
} from "./usersReducer"
import {getCaptchaAC, setUserDataAC} from "./authReducer"
import {initializedSuccessfullyAC} from "redux/appReducer"

// ACTION TYPES

export type AllActionsType =
    | ProfileActionsType
    | DialogsActionsType
    | UserActionsType
    | SidebarActionsType
    | AuthActionsType
    | AppActionsType

export type ProfileActionsType =
    | ReturnType<typeof addPost>
    | ReturnType<typeof deletePost>
    | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof setUserStatus>
    | ReturnType<typeof updateUserPhotoAC>
    | ReturnType<typeof updateUserProfileAC>

export type UserActionsType =
    | ReturnType<typeof getUsersAC>
    | ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setSelectedPage>
    | ReturnType<typeof setTotalUserCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleIsFollowingInProgress>

export type DialogsActionsType = ReturnType<typeof addMessageAC>

export type SidebarActionsType = any

export type AuthActionsType =
    ReturnType<typeof setUserDataAC>
    | ReturnType<typeof getCaptchaAC>

export type AppActionsType = ReturnType<typeof initializedSuccessfullyAC>

// STATE ELEMENTS TYPES

export type ProfilePageDataType = {
    postsData: {
        id: number
        title: string
        likesCount: number
    }[]
    userProfile: null | GetUserApiType
    postTextAreaEnteringValue: string
    status: null | string
}

export type DialogsPageDataType = {
    dialogsData: {
        id: number
        name: string
    }[]
    messagesData: {
        id: number
        title: string
    }[]
    messageTextareaEnteringValue: string
}

export type UsersPageDataType = {
    usersData: GetUsersApiType["items"]
    pageSize: number
    totalUserCount: number
    selectedPage: number
    isFetching: boolean
    allFollowingInProgress: number[]
}

export type SidebarDataType = {}

export type AuthPartDataType = {
    authData: {
        userId: number | null
        login: string | null // = user name
        email: string | null
        isAuth: boolean
        captcha: string | null
    }
}

// API TYPES (TYPES OF RESPONSES FROM SERVER)

export type GetUsersApiType = {
    items: {
        name: string
        id: number
        uniqueUrlName: null | string
        photos: {
            small: null | string
            large: null | string
        }
        status: null | string
        followed: boolean
    }[]
    totalCount: number
    error: null | string
}

export type GetUserApiType = {
    aboutMe: string
    contacts: {
        facebook: string | null
        website: string | null
        vk: string | null
        twitter: string | null
        instagram: string | null
        youtube: string | null
        github: string | null
        mainLink: string | null
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string
    userId: number
    photos: {
        small: string | null
        large: string | null
    }
}

export type ApiType<D = {}> = {
    data: D
    messages: string[]
    fieldsErrors: string[]
    resultCode: number
}

export type FollowUnfollowApiType = ApiType<{
    userId: number | null
    login: string | null // = user name
    email: string | null
    isAuth: boolean
}>

export type AuthApiType = ApiType<{
    id: number | null // !!! fromApi: "id"; in the state: "userId"
    login: string | null // = user name
    email: string | null
}>

export type GetUserStatusApiType = ApiType<{
    id: number | null // !!! fromApi: "id"; in the state: "userId"
    login: string | null // = user name
    email: string | null
}>

export type UpdateMyPhotoApiType = ApiType<{
    photos: {
        small: string | null
        large: string | null
    }
}>

export type LoginApiType = ApiType<{
    userId: number | null
}>

export type LogoutApiType = ApiType

export type UpdateMyProfileType = ApiType

