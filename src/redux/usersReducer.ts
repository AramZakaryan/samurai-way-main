import {
    actionType, usersDataType,
} from "./store";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_NEW_USERS = "SET_NEW_USERS"


const initialSubState: usersDataType = {
    usersData: [
        {
            id: 1,
            followed: false,
            fullName: "Dmitry",
            status: "I'm a boss.",
            location: {city: "Minsk", country: "Belorus"}
        },
        {
            id: 2,
            followed: true,
            fullName: "Sasha",
            status: "I'm a boss too.",
            location: {city: "Moscow", country: "Russia"}
        },
        {
            id: 3,
            followed: false,
            fullName: "Andrew",
            status: "I'm a boss too.",
            location: {city: "Kiev", country: "Ukraine"}
        },
    ],
}


export const usersReducer = (subState:usersDataType = initialSubState, action: actionType):usersDataType => {
    switch (action.type) {
        case SET_NEW_USERS: {
            return {
                ...subState,
                usersData: action.users
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
        default: {
            return subState
        }
    }

}


// ACTION CREATORS

export const setNewUsersAC = (newUsers: any) => /////////////////////////any
    ({type: SET_NEW_USERS, users: newUsers}) as const

export const followAC = (userId: number) =>
    ({type: FOLLOW, userId}) as const

export const unfollowAC = (userId: number) =>
    ({type: UNFOLLOW, userId}) as const

