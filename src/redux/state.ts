
export let state = {
    profilePageData: {
        postsData: [
            {id: 1, message: "Hi, How are you?", likesCount: 0},
            {id: 2, message: "It's my first post", likesCount: 23}
        ]
    },
    dialogsPageData: {
        dialogsData: [
            {id: 1, name: "Gagulik"},
            {id: 2, name: "Vazgenchik"},
            {id: 3, name: "Serobik"},
            {id: 4, name: "Ghukasik"},
        ],
        messagesData: [
            {id: 1, message: "Hi!"},
            {id: 2, message: "How are you?"},
            {id: 3, message: "Yo!"}
        ]
    },
    sidebarData: {}
}

export const addPost = (postMessage:   string) => {
    let postTobeAdded = {
        id: 5,
        message: postMessage,
        likesCount: 0
    }
    state.profilePageData.postsData.push(postTobeAdded)
    console.log(state.profilePageData.postsData)
}
