import React from "react";
import {addMessageAC, updateMessageTextareaValueAC} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {storeReduxType} from "../../redux/storeRedux";

// type DialogsPropsType = {
//     dialogsPageData: {
//         dialogsData: {
//             id: number
//             name: string
//         }[]
//         messagesData: {
//             id: number
//             title: string
//         } []
//         messageTextareaEnteringValue: string
//     }
//     dispatch: dispatchType
// }


type DialogsPropsType = {
    store: storeReduxType
}


export const DialogsContainer: React.FC<DialogsPropsType> = (props) => {

    const addMessageContainerHandler = () => {
        props.store.dispatch(addMessageAC())
    }

    const textareaOnChangeContainerHandler = (enteringValue: string) => {
        props.store.dispatch(updateMessageTextareaValueAC(enteringValue))
    }

    return (<>
            <Dialogs dialogsPageData={props.store.getState().dialogsPageData}
                     addMessage={addMessageContainerHandler}
                     textareaOnChangeHandler={textareaOnChangeContainerHandler}
            />
        </>
    )
}