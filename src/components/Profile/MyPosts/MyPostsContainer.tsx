import React from "react";
import {addPostAC, updatePostTextAreaValueAC} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {storeReduxType} from "../../../redux/storeRedux";

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

type MyPostsPropsType = {
    store: storeReduxType
}

export const MyPostsContainer: React.FC<MyPostsPropsType> = (props) => {

    const addPostContainerHandler = () => {
            props.store.dispatch(addPostAC())
    }

    const textareaOnChangeContainerHandler = (enteringValue:string) => {
        props.store.dispatch(updatePostTextAreaValueAC(enteringValue))
    }


    return (
        <MyPosts profilePageData={props.store.getState().profilePageData}
                 textareaOnChange={textareaOnChangeContainerHandler}
                 addPost={addPostContainerHandler}
        />
    )
}