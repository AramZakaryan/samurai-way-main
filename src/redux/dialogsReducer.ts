import {
    actionType,
    dialogsPageDataType,
} from "./store";

const initialSubState: dialogsPageDataType ={
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
}


export const dialogsReducer = (subState:dialogsPageDataType=initialSubState, action:actionType):dialogsPageDataType => {

    switch (action.type) {
        case "ADD-MESSAGE":
            const messageTobeAdded = {
                id: new Date().getTime(),
                title: subState.messageTextareaEnteringValue
            }
            subState.messagesData.push(messageTobeAdded)
            subState.messageTextareaEnteringValue = ""
            break
        case "UPDATE-MESSAGE-TEXTAREA-VALUE":
            subState.messageTextareaEnteringValue = action.enteringValue
            break
    }

    return subState

}

// ACTION CREATORS

export const addMessageAC = () =>
    ({type: "ADD-MESSAGE"}) as const

export const updateMessageTextareaValueAC = (enteringValue: string) =>
    ({type: "UPDATE-MESSAGE-TEXTAREA-VALUE", enteringValue: enteringValue}) as const
