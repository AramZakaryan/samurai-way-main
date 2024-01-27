// TYPES

import {addPostAC, profileReducer, updatePostTextAreaValueAC} from "./profileReducer";
import {addMessageAC, dialogsReducer, updateMessageTextareaValueAC} from "./dialogsReducer";
import {followAC, setNewUsersAC, unfollowAC} from "./usersReducer";

export type profilePageDataType = {
    postsData: {
        id: number
        title: string
        likesCount: number
    } []
    postTextAreaEnteringValue: string
}

export type dialogsPageDataType = {
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

export type usersPageDataType = {
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
}

export type sidebarDataType = {}

export type stateType = {
    profilePageData: profilePageDataType
    dialogsPageData: dialogsPageDataType
    sidebarData: sidebarDataType
}

export type storeType = {
    state: stateType
    getState: () => stateType
    subscriber: (state: stateType) => void
    subscribe: (observer: (state: stateType) => void) => void
    dispatch: dispatchType
}

export type dispatchType = (action: actionType) => void
export type actionType = ReturnType<typeof addPostAC>
    | ReturnType<typeof updatePostTextAreaValueAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof updateMessageTextareaValueAC>
    | ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setNewUsersAC>


// STORE

export let store: storeType = {
    state: {
        profilePageData: {
            postsData: [
                {id: 1, title: "Hi, How are you?", likesCount: 0},
                {id: 2, title: "It's my first post", likesCount: 23}
            ],
            postTextAreaEnteringValue: ""
        },
        dialogsPageData: {
            dialogsData: [
                {id: 1, name: "Gagulik"},
                {id: 2, name: "Vazgenchik"},
                {id: 3, name: "Serobik"},
                {id: 4, name: "Ghukasik"},
            ],
            messagesData: [
                {id: 1, title: "Hi!"},
                {id: 2, title: "How are you?"},
                {id: 3, title: "Yo!"}
            ],
            messageTextareaEnteringValue: ""
        },
        sidebarData: {}
    },
    getState() {
        return this.state
    },
    // addPost(newPostTitle) {
    //     let postTobeAdded = {
    //         id: new Date().getTime(),
    //         title: newPostTitle,
    //         likesCount: 0
    //     }
    //     this._state.profilePageData.postsData.push(postTobeAdded)
    //     this._state.profilePageData.postTextAreaEnteringValue = ""
    //     this._subscriber(this)
    //     console.log(this)
    // },
    // updatePostTextAreaValue(enteringValue) {
    //     this._state.profilePageData.postTextAreaEnteringValue = enteringValue
    //     this._subscriber(this)
    // },
    // addMessage() {
    //     const messageTobeAdded = {
    //         id: new Date().getTime(),
    //         title: this._state.dialogsPageData.messageTextareaEnteringValue
    //     }
    //     this._state.dialogsPageData.messagesData.push(messageTobeAdded)
    //     this._state.dialogsPageData.messageTextareaEnteringValue = ""
    //     this._subscriber(this)
    //     console.log(this)
    //
    // },
    // updateMessageTextareaValue(enteringValue) {
    //     store._state.dialogsPageData.messageTextareaEnteringValue = enteringValue
    //     store._subscriber(store)
    // },
    subscriber() {
        /* rerenderEntireThree_Dublicate */
    },
    subscribe(observer) {
        this.subscriber = observer
    },
    dispatch(action) {
        this.state.profilePageData = profileReducer(this.state.profilePageData, action)
        this.state.dialogsPageData = dialogsReducer(this.state.dialogsPageData, action)
        store.subscriber(store.getState())
    }
}


