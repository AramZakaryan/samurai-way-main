// TYPES

import {addPostAC, profileReducer, updatePostTextAreaValueAC} from "./profileReducer";
import {addMessageAC, dialogsReducer, updateMessageTextareaValueAC} from "./dialogsReducer";

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

export type stateType = {
    profilePageData: profilePageDataType
    dialogsPageData: dialogsPageDataType
    sidebarData: {}
}

export type storeType = {
    _state: stateType
    getState: () => stateType
    _subscriber: (store: storeType) => void
    subscribe: (observer: (store: storeType) => void) => void
    dispatch: dispatchType
}

export type dispatchType = (action: actionType) => void
export type actionType = ReturnType<typeof addPostAC>
    | ReturnType<typeof updatePostTextAreaValueAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof updateMessageTextareaValueAC>


// STORE

export let store: storeType = {
    _state: {
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
        return this._state
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
    _subscriber(store) {
        /* rerenderEntireThree_Dublicate */
    },
    subscribe(observer) {
        this._subscriber = observer
    },
    dispatch(action) {
        this._state.profilePageData = profileReducer(this._state.profilePageData, action)
        this._state.dialogsPageData = dialogsReducer(this._state.dialogsPageData, action)
        store._subscriber(store)
    }
}


