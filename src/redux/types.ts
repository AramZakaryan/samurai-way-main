import { addPost, setUserStatus, setUserProfileAC, updatePostTextAreaValue } from "./profileReducer"
import { addMessageAC, updateMessageTextareaValueAC } from "./dialogsReducer"
import {
  followAC,
  getUsersAC,
  setSelectedPage,
  setTotalUserCount,
  toggleIsFetching,
  toggleIsFollowingInProgress,
  unfollowAC,
} from "./usersReducer"
import { setUserDataAC } from "./authReducer"

// ACTION TYPES

export type AllActionsType =
  | ProfileActionsType
  | DialogsActionsType
  | UserActionsType
  | SidebarActionsType
  | AuthActionsType

export type ProfileActionsType =
  | ReturnType<typeof addPost>
  | ReturnType<typeof updatePostTextAreaValue>
  | ReturnType<typeof setUserProfileAC>
  | ReturnType<typeof setUserStatus>

export type UserActionsType =
  | ReturnType<typeof getUsersAC>
  | ReturnType<typeof followAC>
  | ReturnType<typeof unfollowAC>
  | ReturnType<typeof setSelectedPage>
  | ReturnType<typeof setTotalUserCount>
  | ReturnType<typeof toggleIsFetching>
  | ReturnType<typeof toggleIsFollowingInProgress>

export type DialogsActionsType =
  | ReturnType<typeof addMessageAC>
  | ReturnType<typeof updateMessageTextareaValueAC>

export type SidebarActionsType = any

export type AuthActionsType = ReturnType<typeof setUserDataAC>

// STATE ELEMENTS TYPES

export type ProfilePageDataType = {
  postsData: {
    id: number
    title: string
    likesCount: number
  }[]
  userProfile: getUserApiType
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
  usersData: getUsersApiType["items"]
  pageSize: number
  totalUserCount: number
  selectedPage: number
  isFetching: boolean
  allFollowingInProgress: number[]
}

export type SidebarDataType = {}

export type AuthPartDataType = {
  authData: FollowUnfollowApiType["data"]
}

// API TYPES (TYPES OF RESPONSES FROM SERVER)

export type getUsersApiType = {
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

export type getUserApiType = null | {
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

export type FollowUnfollowApiType = {
  data: {
    userId: number | null
    login: string | null // = user name
    email: string | null
    isAuth: boolean
  }
  messages: string[]
  fieldsErrors: string[]
  resultCode: number
}

export type AuthApiType = {
  data: {
    id: number | null // !!! fromApi: "id"; in the state: "userId"
    login: string | null // = user name
    email: string | null
  }
  messages: string[]
  fieldsErrors: string[]
  resultCode: number
}

export type getUserStatusApiType = {
  data: {}
  messages: string[]
  fieldsErrors: string[]
  resultCode: number
}
