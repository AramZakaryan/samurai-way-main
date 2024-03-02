import {addPost, setUserProfile, updatePostTextAreaValue} from "./profileReducer";
import {addMessageAC, updateMessageTextareaValueAC} from "./dialogsReducer";
import {
    follow,
    setNewUsers,
    setSelectedPage,
    setTotalUserCount,
    toggleIsFetching,
    toggleIsFollowingInProgress,
    unfollow
} from "./usersReducer";
import {setUserData} from "./authReducer";


// ACTION TYPES

export type ActionType = ReturnType<typeof addPost>
    | ReturnType<typeof updatePostTextAreaValue>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof updateMessageTextareaValueAC>
    | ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setNewUsers>
    | ReturnType<typeof setSelectedPage>
    | ReturnType<typeof setTotalUserCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleIsFollowingInProgress>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setUserData>


// STATE ELEMENTS TYPES

export type ProfilePageDataType = {
    postsData: {
        id: number
        title: string
        likesCount: number
    } []
    userProfile: any
    postTextAreaEnteringValue: string
}

export type DialogsPageDataType = {
    dialogsData: {
        id: number
        name: string
    }[]
    messagesData: {
        id: number
        title: string
    } []
    messageTextareaEnteringValue: string
}

export type UsersPageDataType = {
    usersData: {
        name: string
        id: number
        uniqueUrlName: string | null
        photos: {
            small: string | null
            large: string | null
        }
        status: string
        followed: boolean
        // location: {
        //     city: string
        //     country: string
        // }
    }[]
    pageSize: number
    totalUserCount: number
    selectedPage: number
    isFetching: boolean
    followingInProgress: boolean
}

export type SidebarDataType = {}

export type AuthPartDataType = {
    authData: {
        userId: number | null
        login: string | null // = user name
        email: string | null
        isAuth: boolean
    }
}