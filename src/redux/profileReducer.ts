import {ActionType, ProfilePageDataType} from "./types";


const initialSubState: ProfilePageDataType = {
    postsData: [
        {id: 1, title: "Hi, How are you?", likesCount: 0},
        {id: 2, title: "It's my first post", likesCount: 23}
    ],
    userProfile: null,
    postTextAreaEnteringValue: ""
}


export const profileReducer = (subState: ProfilePageDataType = initialSubState, action: ActionType): ProfilePageDataType => {
    switch (action.type) {
        case "ADD-POST":
            return {
                ...subState,
                postsData: [...subState.postsData,
                    {           // post to be added
                        id: new Date().getTime(),
                        title: subState.postTextAreaEnteringValue,
                        likesCount: 0
                    }
                ],
                postTextAreaEnteringValue: ""
            }
        case "UPDATE-POST-TEXTAREA-VALUE":
            return {
                ...subState,
                postTextAreaEnteringValue: action.enteringValue
            }
        case "SET_USER_PROFILE":
            return {
                ...subState,
                userProfile:action.userProfile
            }
        default: {
            return subState
        }
    }
}


// ACTION CREATORS

export const addPost = () =>
    ({type: "ADD-POST"}) as const

export const updatePostTextAreaValue = (enteringValue: string) =>
    ({type: "UPDATE-POST-TEXTAREA-VALUE", enteringValue: enteringValue}) as const

export type UserProfileType = null | {
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
    },
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string
    userId: number
    photos: {
        small: string | null
        large: string | null
    }
}

export const setUserProfile = (userProfile: UserProfileType) => ///////////// setUserProfile ACTION CREATOR
    ({type: "SET_USER_PROFILE", userProfile}) as const