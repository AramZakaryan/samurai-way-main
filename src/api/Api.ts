import axios from "axios"
import {
  AuthApiType,
  FollowUnfollowApiType,
  getUserApiType,
  getUsersApiType,
  getUserStatusApiType,
  LoginApiType,
  LogoutApiType,
} from "redux/types"

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: { "API-KEY": "20f2cd85-6c61-4a31-bb9f-e21a318df2bf" },
})

export const api = {
  getUsers(selectedPage: number, pageSize: number) {
    return instance
      .get<getUsersApiType>(`users/?page=${selectedPage}&count=${pageSize}`)
      .then((response) => response.data) // for sending to UI only "data"
  },

  // Obsolete method
  getUser(userId: number) {
    // console.warn("P.S.(Aram) Obsolete method, please use 'profileApi.getUser'.")
    return profileApi.getUser(userId)
  },

  follow(userId: number) {
    return instance
      .post<FollowUnfollowApiType>(`follow/${userId}`)
      .then((response) => response.data) // for sending to UI only "data"
  },

  unfollow(userId: number) {
    return instance
      .delete<FollowUnfollowApiType>(`follow/${userId}`)
      .then((response) => response.data) // for sending to UI only "data"
  },
}

export const profileApi = {
  getUser(userId: number) {
    return instance.get<getUserApiType>(`profile/${userId}`).then((response) => response.data) // for sending to UI only "data"
  },
  getUserStatus(userId: number) {
    return instance.get<null | string>(`profile/status/${userId}`)
  },
  updateMyStatus(status: null | string) {
    return instance.put<getUserStatusApiType>("profile/status", { status })
  },
}

export const authApi = {
  auth() {
    return instance.get<AuthApiType>("auth/me").then((response) => response.data) // for sending to UI only "data"
  },
  login(email: string, password: string, rememberMe: boolean = false) {
    return instance
      .post<LoginApiType>("auth/login", { email, password, rememberMe })
      .then((response) => response.data) // for sending to UI only "data"
  },
  logout() {
    return instance.delete<LogoutApiType>("auth/login").then((response) => response.data) // for sending to UI only "data"
  },
}
