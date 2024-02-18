import React from "react";

// // TYPES
//
// import {profileReducer} from "./profileReducer";
// import {dialogsReducer} from "./dialogsReducer";
// import {actionType, dialogsPageDataType, profilePageDataType, sidebarDataType} from "./types";
//
// export type stateType = {
//     profilePageData: profilePageDataType
//     dialogsPageData: dialogsPageDataType
//     sidebarData: sidebarDataType
// }
//
// export type storeType = {
//     state: stateType
//     getState: () => stateType
//     subscriber: (state: stateType) => void
//     subscribe: (observer: (state: stateType) => void) => void
//     dispatch: dispatchType
// }
//
// export type dispatchType = (action: actionType) => void
//
//
// // STORE
//
// export let store: storeType = {
//     state: {
//         profilePageData: {
//             postsData: [
//                 {id: 1, title: "Hi, How are you?", likesCount: 0},
//                 {id: 2, title: "It's my first post", likesCount: 23}
//             ],
//             userProfile:null,
//             postTextAreaEnteringValue: ""
//         },
//         dialogsPageData: {
//             dialogsData: [
//                 {id: 1, name: "Gagulik"},
//                 {id: 2, name: "Vazgenchik"},
//                 {id: 3, name: "Serobik"},
//                 {id: 4, name: "Ghukasik"},
//             ],
//             messagesData: [
//                 {id: 1, title: "Hi!"},
//                 {id: 2, title: "How are you?"},
//                 {id: 3, title: "Yo!"}
//             ],
//             messageTextareaEnteringValue: ""
//         },
//         sidebarData: {}
//     },
//     getState() {
//         return this.state
//     },
//     // addPost(newPostTitle) {
//     //     let postTobeAdded = {
//     //         id: new Date().getTime(),
//     //         title: newPostTitle,
//     //         likesCount: 0
//     //     }
//     //     this._state.profilePageData.postsData.push(postTobeAdded)
//     //     this._state.profilePageData.postTextAreaEnteringValue = ""
//     //     this._subscriber(this)
//     //     console.log(this)
//     // },
//     // updatePostTextAreaValue(enteringValue) {
//     //     this._state.profilePageData.postTextAreaEnteringValue = enteringValue
//     //     this._subscriber(this)
//     // },
//     // addMessage() {
//     //     const messageTobeAdded = {
//     //         id: new Date().getTime(),
//     //         title: this._state.dialogsPageData.messageTextareaEnteringValue
//     //     }
//     //     this._state.dialogsPageData.messagesData.push(messageTobeAdded)
//     //     this._state.dialogsPageData.messageTextareaEnteringValue = ""
//     //     this._subscriber(this)
//     //     console.log(this)
//     //
//     // },
//     // updateMessageTextareaValue(enteringValue) {
//     //     store._state.dialogsPageData.messageTextareaEnteringValue = enteringValue
//     //     store._subscriber(store)
//     // },
//     subscriber() {
//         /* rerenderEntireThree_Dublicate */
//     },
//     subscribe(observer) {
//         this.subscriber = observer
//     },
//     dispatch(action) {
//         this.state.profilePageData = profileReducer(this.state.profilePageData, action)
//         this.state.dialogsPageData = dialogsReducer(this.state.dialogsPageData, action)
//         store.subscriber(store.getState())
//     }
// }


