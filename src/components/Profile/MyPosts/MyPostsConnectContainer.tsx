import React from "react";
import {addPostAC, updatePostTextAreaValueAC} from "../../../redux/profileReducer";
import {MyPosts, MyPostsPropsType} from "./MyPosts";
import {connect} from "react-redux";
import {stateReduxType} from "../../../redux/storeRedux";
import { Dispatch } from "redux";

type MapStateToPropsType = Pick<MyPostsPropsType, "profilePageData">

type MapDispatchToPropsType = Pick<MyPostsPropsType, "addPost" | "textareaOnChange">


const mapStateToProps = (state: stateReduxType): MapStateToPropsType => {
    return {
        profilePageData: state.profilePageData
    }

}

// const mapDispatchToProps = (dispatch: dispatchReduxType): MapDispatchToPropsType => {
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
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


