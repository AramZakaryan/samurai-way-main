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
    getState: ()=>stateType
    addPost: (newPostTitle: string) => void
    updatePostTextAreaValue: (enteringValue: string) => void
    addMessage: () => void
    updateMessageTextareaValue: (enteringValue: string) => void
    subscriber: (store: storeType) => void
    subscribe: (observer: (store: storeType) => void) => void
}


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
    getState () {
        return this._state
    },
    addPost(newPostTitle) {
        let postTobeAdded = {
            id: new Date().getTime(),
            title: newPostTitle,
            likesCount: 0
        }
        this._state.profilePageData.postsData.push(postTobeAdded)
        this._state.profilePageData.postTextAreaEnteringValue = ""
        this.subscriber(this)
        console.log(this)
    },
    updatePostTextAreaValue(enteringValue) {
        store._state.profilePageData.postTextAreaEnteringValue = enteringValue
        store.subscriber(store)
    },
    addMessage() {
        const messageTobeAdded = {
            id: new Date().getTime(),
            title: this._state.dialogsPageData.messageTextareaEnteringValue
        }
        this._state.dialogsPageData.messagesData.push(messageTobeAdded)
        this._state.dialogsPageData.messageTextareaEnteringValue = ""
        this.subscriber(this)
        console.log(this)

    },
    updateMessageTextareaValue(enteringValue) {
        store._state.dialogsPageData.messageTextareaEnteringValue = enteringValue
        store.subscriber(store)
    },
    subscriber(store) {
        /* rerenderEntireThree_Dublicate */
    },
    subscribe(observer) {
        this.subscriber = observer
    }
}
