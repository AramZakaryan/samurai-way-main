import { addPost } from "redux/profileReducer"
import { MyPosts, MyPostsPropsType } from "./MyPosts"
import { connect } from "react-redux"
import { stateReduxType } from "redux/storeRedux"
import { Dispatch } from "redux"

type MapStateToPropsType = Pick<MyPostsPropsType, "profilePageData">

type MapDispatchToPropsType = Pick<MyPostsPropsType, "addPost">

const mapStateToProps = (state: stateReduxType): MapStateToPropsType => {
  return {
    profilePageData: state.profilePageData,
  }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    addPost: (newPostBody: string) => {
      dispatch(addPost(newPostBody))
    },
  }
}

export const MyPostsConnectContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
