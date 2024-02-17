import {
    actionType, usersPageDataType,
} from "./store";

// ACTION NAMES

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_NEW_USERS = "SET_NEW_USERS"
const SET_SELECTED_PAGE = "SET_SELECTED_PAGE"
const SET_TOTAL_USER_COUNT = "SET_TOTAL_USER_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"


const initialSubState: usersPageDataType = {
    usersData: [
        // {
        //     id: 1,
        //     photoUrl: "https://i.imgur.com/xwQu3JU.jpeg",
        //     followed: false,
        //     fullName: "Dmitry",
        //     status: "I'm a boss.",
        //     location: {city: "Minsk", country: "Belorus"}
        // },
        // {
        //     id: 2,
        //     photoUrl: "https://preview.redd.it/brad-pitt-as-the-joker-on-a-movie-poster-for-an-upcoming-v0-n6t2q6nn8e0c1.jpg?width=768&format=pjpg&auto=webp&s=8cdb44bcf07549acb626fbd0de666037cfae0178",
        //     followed: true,
        //     fullName: "Sasha",
        //     status: "I'm a boss too.",
        //     location: {city: "Moscow", country: "Russia"}
        // },
        // {
        //     id: 3,
        //     photoUrl: "data:image/jpeg;base64,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",
        //     followed: false,
        //     fullName: "Andrew",
        //     status: "I'm a boss too.",
        //     location: {city: "Kiev", country: "Ukraine"}
        // }
    ],
    pageSize: 4,
    totalUserCount: 0,
    selectedPage: 1,
    isFetching: false
}


export const usersReducer = (subState: usersPageDataType = initialSubState, action: actionType): usersPageDataType => {
    switch (action.type) {
        case SET_NEW_USERS: {
            return {
                ...subState,
                usersData: action.newUsers
            }
        }
        case FOLLOW: {
            return {
                ...subState,
                usersData: subState.usersData.map(u =>
                    u.id === action.userId
                        ? {
                            ...u,
                            followed: true
                        }
                        : u
                )
            }
        }
        case UNFOLLOW: {
            return {
                ...subState,
                usersData: subState.usersData.map(u =>
                    u.id === action.userId
                        ? {
                            ...u,
                            followed: false
                        }
                        : u
                )

            }
        }
        case SET_SELECTED_PAGE: {
            return {
                ...subState,
                selectedPage: action.selectedPageNumber
            }
        }
        case SET_TOTAL_USER_COUNT: {
            return {
                ...subState,
                totalUserCount: action.totalUserCount
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...subState,
                isFetching: action.isFetching
            }
        }
        default: {
            return subState
        }
    }

}


// ACTION CREATORS   !!! without "AC"

export const setNewUsers = (newUsers: any) => /////////////////////////any
    ({type: SET_NEW_USERS, newUsers}) as const

export const follow = (userId: number) =>
    ({type: FOLLOW, userId}) as const

export const unfollow = (userId: number) =>
    ({type: UNFOLLOW, userId}) as const

export const setSelectedPage = (selectedPageNumber: number) =>
    ({type: SET_SELECTED_PAGE, selectedPageNumber}) as const

export const setTotalUserCount = (totalUserCount: number) =>
    ({type: SET_TOTAL_USER_COUNT, totalUserCount}) as const
export const toggleIsFetching = (isFetching: boolean) =>
    ({type: TOGGLE_IS_FETCHING, isFetching}) as const
