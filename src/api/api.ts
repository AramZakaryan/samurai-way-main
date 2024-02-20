import axios from "axios";
import {UserProfileType} from "../redux/profileReducer";

type AuthApiType = {
    data: {
        id: number
        login: string
        email: string
    }
    messages: string[]
    fieldsErrors: string[]
    resultCode: number
}

type getUsersApiType = {
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

type getUserApiType = UserProfileType

type FollowUnfollowUserApiType = {
    data: {}
    messages: string[]
    fieldsErrors: string[]
    resultCode: number
}


const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {"API-KEY": "3485684c-f79f-42a9-a6c9-e22cde9c6d79"}
})


export const api = {

    auth() {
        return instance.get<AuthApiType>("auth/me")
            .then(response => response.data) // for sending to UI only "data"
    },

    getUsers(selectedPage: number, pageSize: number) {
        return instance.get<getUsersApiType>(`users/?page=${selectedPage}&count=${pageSize}`)
            .then(response => response.data) // for sending to UI only "data"
    },

    getUser(userId: number) {
        return instance.get<getUserApiType>(`profile/${userId}`)
            .then(response => response.data) // for sending to UI only "data"

    },

    followUser(userId: number) {
        return instance.post<FollowUnfollowUserApiType>(`follow/${userId}`)
            .then(response => response.data) // for sending to UI only "data"

    },

    unfollowUser(userId: number) {
        return instance.delete<FollowUnfollowUserApiType>(`follow/${userId}`)
            .then(response => response.data) // for sending to UI only "data"

    }

}