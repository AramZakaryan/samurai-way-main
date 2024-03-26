import { AllActionsType, getUsersApiType, UserActionsType, UsersPageDataType } from "./types"
import { api } from "api/Api"
import { Dispatch } from "redux"

// ACTION NAMES

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const GET_USERS = "GET_USERS"
const SET_SELECTED_PAGE = "SET_SELECTED_PAGE"
const SET_TOTAL_USER_COUNT = "SET_TOTAL_USER_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = "TOGGLE_IS_FOLLOWING_IN_PROGRESS"

const initialSubState: UsersPageDataType = {
  usersData: [],
  pageSize: 4,
  totalUserCount: 0,
  selectedPage: 1,
  isFetching: false, // for showing Spinner
  allFollowingInProgress: [], // for activation/disactivating "Follow/Unfollow" button
}

export const usersReducer = (
  subState: UsersPageDataType = initialSubState,
  action: UserActionsType,
): UsersPageDataType => {
  switch (action.type) {
    case GET_USERS: {
      return {
        ...subState,
        usersData: action.newUsers,
      }
    }
    case FOLLOW: {
      return {
        ...subState,
        usersData: subState.usersData.map((u) =>
          u.id === action.userId
            ? {
                ...u,
                followed: true,
              }
            : u,
        ),
      }
    }
    case UNFOLLOW: {
      return {
        ...subState,
        usersData: subState.usersData.map((u) =>
          u.id === action.userId
            ? {
                ...u,
                followed: false,
              }
            : u,
        ),
      }
    }
    case SET_SELECTED_PAGE: {
      return {
        ...subState,
        selectedPage: action.selectedPageNumber,
      }
    }
    case SET_TOTAL_USER_COUNT: {
      return {
        ...subState,
        totalUserCount: action.totalUserCount,
      }
    }
    case TOGGLE_IS_FETCHING: {
      return {
        ...subState,
        isFetching: action.isFetching,
      }
    }
    case TOGGLE_IS_FOLLOWING_IN_PROGRESS: {
      return {
        ...subState,
        allFollowingInProgress: action.followingInProgress
          ? [...subState.allFollowingInProgress, action.userId]
          : subState.allFollowingInProgress.filter((el) => el !== action.userId),
      }
    }
    default: {
      return subState
    }
  }
}

////////// ACTION CREATORS

/** P.S.(Aram) getUsers ACTION CREATOR
 */
export const getUsersAC = (newUsers: getUsersApiType["items"]) =>
  ({ type: GET_USERS, newUsers }) as const

/** P.S.(Aram) follow ACTION CREATOR
 */
export const followAC = (userId: number) => ({ type: FOLLOW, userId }) as const

/** P.S.(Aram) unfollow ACTION CREATOR
 */
export const unfollowAC = (userId: number) => ({ type: UNFOLLOW, userId }) as const

/** P.S.(Aram) setSelectedPage ACTION CREATOR
 */
export const setSelectedPage = (selectedPageNumber: number) =>
  ({ type: SET_SELECTED_PAGE, selectedPageNumber }) as const

/** P.S.(Aram) setTotalUserCount ACTION CREATOR
 */
export const setTotalUserCount = (totalUserCount: number) =>
  ({ type: SET_TOTAL_USER_COUNT, totalUserCount }) as const

/** P.S.(Aram) toggleIsFetching ACTION CREATOR.
 *  This is for showing Spinner.
 */
export const toggleIsFetching = (isFetching: boolean) =>
  ({ type: TOGGLE_IS_FETCHING, isFetching }) as const

/** P.S.(Aram) toggleIsFollowingInProgress ACTION CREATOR.
 *  This is for activating/disactivating "Follow/Unfollow" button.
 */
export const toggleIsFollowingInProgress = (userId: number, followingInProgress: boolean) =>
  ({ type: TOGGLE_IS_FOLLOWING_IN_PROGRESS, userId, followingInProgress }) as const

/////////// THUNK CREATORS

/** P.S.(Aram) getUsers THUNK CREATOR.
 * @param page P.S.(Aram) Number of selected page
 * @param pageSize P.S.(Aram) Number of users on one page
 */
export const getUsers = (page: number, pageSize: number) => (dispatch: Dispatch) => {
  dispatch(toggleIsFetching(true))
  api.getUsers(page, pageSize).then((data) => {
    dispatch(toggleIsFetching(false))
    dispatch(getUsersAC(data.items))
    dispatch(setTotalUserCount(data.totalCount))
  })
}

/** P.S.(Aram) unfollow THUNK CREATOR.
 */
export const unfollow = (userId: number) => (dispatch: Dispatch) => {
  dispatch(toggleIsFollowingInProgress(userId, true))
  api.unfollow(userId).then((res) => {
    if (res.resultCode == 0) {
      dispatch(unfollowAC(userId))
    }
    dispatch(toggleIsFollowingInProgress(userId, false))
  })
}

/** P.S.(Aram) follow THUNK CREATOR.
 */
export const follow = (userId: number) => (dispatch: Dispatch) => {
  dispatch(toggleIsFollowingInProgress(userId, true))
  api.follow(userId).then((res) => {
    if (res.resultCode == 0) {
      dispatch(followAC(userId))
    }
    dispatch(toggleIsFollowingInProgress(userId, false))
  })
}
