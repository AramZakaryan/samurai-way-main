import { DialogsActionsType, DialogsPageDataType } from "./types"

const initialSubState: DialogsPageDataType = {
  dialogsData: [
    { id: 1, name: "Gagulik" },
    { id: 2, name: "Vazgenchik" },
    { id: 3, name: "Serobik" },
    { id: 4, name: "Ghukasik" },
  ],
  messagesData: [
    { id: 1, title: "Hi!" },
    { id: 2, title: "How are you?" },
    { id: 3, title: "Yo!" },
  ],
  messageTextareaEnteringValue: "",
}

export const dialogsReducer = (
  subState: DialogsPageDataType = initialSubState,
  action: DialogsActionsType,
): DialogsPageDataType => {
  switch (action.type) {
    case "ADD-MESSAGE":
      return {
        ...subState,
        messagesData: [
          ...subState.messagesData,
          {
            id: new Date().getTime(),
            title: action.newMessageBody,
          },
        ],
      }
    default: {
      return subState
    }
  }
}

// ACTION CREATORS

export const addMessageAC = (newMessageBody: string) => {
  debugger
  return { type: "ADD-MESSAGE", newMessageBody } as const
}
