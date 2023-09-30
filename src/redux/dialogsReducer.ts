import {
    actionType,
    dialogsPageDataType,
} from "./store";


export const dialogsReducer = (subState:dialogsPageDataType, action:actionType):dialogsPageDataType => {

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
