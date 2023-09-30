// TYPES

import exp from "constants";

export type stateType = {
    profilePageData: {
        postsData: {
            id: number
            title: string
            likesCount: number
        } []
        postTextAreaEnteringValue: string
    }
    dialogsPageData: {
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
type actionType = {
    type: "ADD-POST"
        | "UPDATE-POST-TEXTAREA-VALUE"
        | "ADD-MESSAGE"
        | "UPDATE-MESSAGE-TEXTAREA-VALUE"
    [key: string]: any
}


// ACTION CREATORS

export const addPostAC = (): actionType =>
    ({type: "ADD-POST"})

export const updatePostTextAreaValueAC = (enteringValue: string): actionType =>
    ({type: "UPDATE-POST-TEXTAREA-VALUE", enteringValue: enteringValue})

export const addMessageAC = (): actionType =>
    ({type: "ADD-MESSAGE"})

export const updateMessageTextareaValueAC = (enteringValue: string): actionType =>
    ({type: "UPDATE-MESSAGE-TEXTAREA-VALUE", enteringValue: enteringValue})


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
        switch (action.type) {
            case "ADD-POST":
                let postTobeAdded = {
                    id: new Date().getTime(),
                    title: this._state.profilePageData.postTextAreaEnteringValue,
                    likesCount: 0
                }
                this._state.profilePageData.postsData.push(postTobeAdded)
                this._state.profilePageData.postTextAreaEnteringValue = ""
                this._subscriber(this)
                break
            case "UPDATE-POST-TEXTAREA-VALUE":
                this._state.profilePageData.postTextAreaEnteringValue = action.enteringValue
                this._subscriber(this)
                break
            case "ADD-MESSAGE":
                const messageTobeAdded = {
                    id: new Date().getTime(),
                    title: this._state.dialogsPageData.messageTextareaEnteringValue
                }
                this._state.dialogsPageData.messagesData.push(messageTobeAdded)
                this._state.dialogsPageData.messageTextareaEnteringValue = ""
                this._subscriber(this)
                break
            case "UPDATE-MESSAGE-TEXTAREA-VALUE":
                store._state.dialogsPageData.messageTextareaEnteringValue = action.enteringValue
                store._subscriber(store)
                break
            default:
                throw new Error("Wrong Method!")
        }
    }
}


