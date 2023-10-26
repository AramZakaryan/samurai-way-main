import React from "react";
// import {addMessageAC, updateMessageTextareaValueAC} from "../../redux/dialogsReducer";
// import {Dialogs} from "./Dialogs";
// import {StoreContext} from "../../redux/storeContext";
//
// // type DialogsPropsType = {
// //     dialogsPageData: {
// //         dialogsData: {
// //             id: number
// //             name: string
// //         }[]
// //         messagesData: {
// //             id: number
// //             title: string
// //         } []
// //         messageTextareaEnteringValue: string
// //     }
// //     dispatch: dispatchType
// // }
//
//
// // type DialogsPropsType = {
// //     store: storeReduxType
// // }
//
//
// // export const DialogsContainer: React.FC<DialogsPropsType> = (props) => {
// export const DialogsContainer: React.FC = () => {
//
//     // const addMessageContainerHandler = () => {
//     //     props.store.dispatch(addMessageAC())
//     // }
//
//     // const textareaOnChangeContainerHandler = (enteringValue: string) => {
//     //     props.store.dispatch(updateMessageTextareaValueAC(enteringValue))
//     // }
//
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 const addMessageContainerHandler = () => {
//                     store.dispatch(addMessageAC())
//                 }
//                 const textareaOnChangeContainerHandler = (enteringValue: string) => {
//                     store.dispatch(updateMessageTextareaValueAC(enteringValue))
//                 }
//                 return (<Dialogs dialogsPageData={store.getState().dialogsPageData}
//                                  addMessage={addMessageContainerHandler}
//                                  textareaOnChangeHandler={textareaOnChangeContainerHandler}
//
//                 />)
//             }
//             }
//         </StoreContext.Consumer>
//
//     )
// }