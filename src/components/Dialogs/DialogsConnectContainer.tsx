import React from "react";
import {addMessageAC, updateMessageTextareaValueAC} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {dispatchReduxType, stateReduxType} from "../../redux/storeRedux";


// const addMessageContainerHandler = () => {
//     props.store.dispatch(addMessageAC())
// }

// const textareaOnChangeContainerHandler = (enteringValue: string) => {
//     props.store.dispatch(updateMessageTextareaValueAC(enteringValue))
// }

const mapStateToProps = (state: stateReduxType) => {
    return {
        dialogsPageData: state.dialogsPageData
    }
}

const mapDispatchToProps = (dispatch:dispatchReduxType) => {
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