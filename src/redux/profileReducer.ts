import {
    actionType,
    profilePageDataType,
} from "./store";


const initialSubState: profilePageDataType = {
    postsData: [
        {id: 1, title: "Hi, How are you?", likesCount: 0},
        {id: 2, title: "It's my first post", likesCount: 23}
    ],
    postTextAreaEnteringValue: ""
}


export const profileReducer = (subState: profilePageDataType = initialSubState, action: actionType): profilePageDataType => {
    switch (action.type) {
        case "ADD-POST":
            let postTobeAdded = {
                id: new Date().getTime(),
                title: subState.postTextAreaEnteringValue,
                likesCount: 0
            }
            return {
                ...subState,
                postsData: [...subState.postsData,
                    postTobeAdded]
                , postTextAreaEnteringValue: ""
            }
        case "UPDATE-POST-TEXTAREA-VALUE":
            return {...subState,
                postTextAreaEnteringValue:action.enteringValue
            }
    }
    return subState
}


// ACTION CREATORS

export const addPostAC = () =>
    ({type: "ADD-POST"}) as const

export const updatePostTextAreaValueAC = (enteringValue: string) =>
    ({type: "UPDATE-POST-TEXTAREA-VALUE", enteringValue: enteringValue}) as const
