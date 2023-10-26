import React from "react";
import {addMessageAC, updateMessageTextareaValueAC} from "../../redux/dialogsReducer";
import {Dialogs, DialogsPropsType} from "./Dialogs";
import {connect} from "react-redux";
import {stateReduxType} from "../../redux/storeRedux";
import {Dispatch} from "redux";


// const addMessageContainerHandler = () => {
//     props.store.dispatch(addMessageAC())
// }

// const textareaOnChangeContainerHandler = (enteringValue: string) => {
//     props.store.dispatch(updateMessageTextareaValueAC(enteringValue))
// }

type MapStateToPropsType = Pick<DialogsPropsType, "dialogsPageData">

type MapDispatchToPropsType = Pick<DialogsPropsType, "addMessage" | "textareaOnChangeHandler">


const mapStateToProps = (state: stateReduxType): MapStateToPropsType => {
    return {
        dialogsPageData: state.dialogsPageData
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addMessage: () => {
            dispatch(addMessageAC())
        },
        textareaOnChangeHandler: (enteringValue: string) => {
            dispatch(updateMessageTextareaValueAC(enteringValue))
        }
    }
}

export const DialogsConnectContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

// return (
//     <StoreContext.Consumer>
//         {(store) => {
//             const addMessageContainerHandler = () => {
//                 store.dispatch(addMessageAC())
//             }
//             const textareaOnChangeContainerHandler = (enteringValue: string) => {
//                 store.dispatch(updateMessageTextareaValueAC(enteringValue))
//             }
//             return (<Dialogs dialogsPageData={store.getState().dialogsPageData}
//                              addMessage={addMessageContainerHandler}
//                              textareaOnChangeHandler={textareaOnChangeContainerHandler}
//
//             />)
//         }
//         }
//     </StoreContext.Consumer>
//
// )
// }


