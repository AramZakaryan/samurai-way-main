export type storeType = {
    profilePageData: {
        postsData: {
            id: number
            title: string
            likesCount: number
        } []
        addPost: (newPostTitle: string) => void
        postTextAreaEnteringValue: string
        updatePostTextAreaValue: (enteringValue: string) => void
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
        addMessage: () => void
        messageTextareaEnteringValue: string
        updateMessageTextareaValue: (enteringValue: string) => void
    }
    sidebarData: {}
}

export let store: storeType = {
    profilePageData: {
        postsData: [
            {id: 1, title: "Hi, How are you?", likesCount: 0},
            {id: 2, title: "It's my first post", likesCount: 23}
        ],
        addPost(newPostTitle: string) {
            let postTobeAdded = {
                id: new Date().getTime(),
                title: newPostTitle,
                likesCount: 0
            }
            store.profilePageData.postsData.push(postTobeAdded)
            store.profilePageData.postTextAreaEnteringValue = ""
            rerenderEntireThree_Dublicate(store)
        },
        postTextAreaEnteringValue: "",
        updatePostTextAreaValue(enteringValue: string) {
            store.profilePageData.postTextAreaEnteringValue = enteringValue
            rerenderEntireThree_Dublicate(store)
        }
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
        addMessage() {
            const messageTobeAdded = {
                id: new Date().getTime(),
                title: store.dialogsPageData.messageTextareaEnteringValue
            }
            store.dialogsPageData.messagesData.push(messageTobeAdded)
            store.dialogsPageData.messageTextareaEnteringValue = ""
            rerenderEntireThree_Dublicate(store)
        },
        messageTextareaEnteringValue: "",
        updateMessageTextareaValue(enteringValue: string) {
            store.dialogsPageData.messageTextareaEnteringValue = enteringValue
            rerenderEntireThree_Dublicate(store)
        }
    },
    sidebarData: {}
}


let rerenderEntireThree_Dublicate = (state: storeType) => {
}

export const subscriber = (observer: (state: storeType) => void) => {
    rerenderEntireThree_Dublicate = observer
}