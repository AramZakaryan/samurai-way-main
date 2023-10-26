import React from "react";
import {addPostAC, updatePostTextAreaValueAC} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {dispatchReduxType, stateReduxType} from "../../../redux/storeRedux";

const mapStateToProps = (state: stateReduxType) => {
    return {
        profilePageData: state.profilePageData
    }
}

const mapDispatchToProps = (dispatch: dispatchReduxType) => {
    return {
        textareaOnChange: (enteringValue: string) => {
            dispatch(updatePostTextAreaValueAC(enteringValue))
        },
        addPost: () => {
            dispatch(addPostAC())
        }
    }
}

export const MyPostsConnectContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


