import {rerenderEntireThree} from "../render";

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

export let state: stateType = {
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
}


export const addPost = (newPostTitle: string) => {
    let postTobeAdded = {
        id: new Date().getTime(),
        title: newPostTitle,
        likesCount: 0
    }
    state.profilePageData.postsData.push(postTobeAdded)
    state.profilePageData.postTextAreaEnteringValue = ""
    rerenderEntireThree(state)
}

export const updatePostTextAreaValue = (enteringValue: string) => {
    state.profilePageData.postTextAreaEnteringValue = enteringValue
    rerenderEntireThree(state)

}

export const addMessage = () => {
    const messageTobeAdded = {
        id: new Date().getTime(),
        title: state.dialogsPageData.messageTextareaEnteringValue
    }
    state.dialogsPageData.messagesData.push(messageTobeAdded)
    state.dialogsPageData.messageTextareaEnteringValue=""
    rerenderEntireThree(state)
}

export const updateMessageTextareaValue = (enteringValue: string) => {
    state.dialogsPageData.messageTextareaEnteringValue = enteringValue
    rerenderEntireThree(state)
}