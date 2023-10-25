import React from "react";
import {addPostAC, updatePostTextAreaValueAC} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../redux/storeContext";

// type MyPostsPropsType = {
//     profilePageData: {
//         postsData: {
//             id: number
//             title: string
//             likesCount: number
//         }[]
//         postTextAreaEnteringValue: string
//     }
//     dispatch: dispatchType
// }

// type MyPostsPropsType = {
//     store: storeReduxType
// }

// export const MyPostsContainer: React.FC<MyPostsPropsType> = (props) => {
export const MyPostsContainer: React.FC = () => {

    // const addPostContainerHandler = () => {
    //         props.store.dispatch(addPostAC())
    // }

    // const textareaOnChangeContainerHandler = (enteringValue:string) => {
    //     props.store.dispatch(updatePostTextAreaValueAC(enteringValue))
    // }


    return (
        <StoreContext.Consumer>
            {(store) => {
                const addPostContainerHandler = () => {
                    store.dispatch(addPostAC())
                }
                const textareaOnChangeContainerHandler = (enteringValue: string) => {
                    store.dispatch(updatePostTextAreaValueAC(enteringValue))
                }
                return (
                    <MyPosts profilePageData={store.getState().profilePageData}
                             textareaOnChange={textareaOnChangeContainerHandler}
                             addPost={addPostContainerHandler}
                    />

                )
            }}
        </StoreContext.Consumer>
    )
}