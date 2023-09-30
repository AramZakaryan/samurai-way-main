import React, {ChangeEvent} from "react";
import S from "./MyPosts.module.css";
import {Post} from "./Posts/Posts";
import { dispatchType} from "../../../redux/store";
import {addPostAC, updatePostTextAreaValueAC} from "../../../redux/profileReducer";

type MyPostsPropsType = {
    profilePageData: {
        postsData: {
            id: number
            title: string
            likesCount: number
        }[]
        postTextAreaEnteringValue: string
    }
    dispatch: dispatchType
}



export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let posts = props.profilePageData.postsData.map(pst =>
        <Post key={pst.id}
              message={pst.title}
              likesCount={pst.likesCount}
        />
    )

    let newPostElementRef =
        React.createRef<HTMLTextAreaElement>()

    const addPostHandler = () => {
        if (newPostElementRef.current) {
            props.dispatch(addPostAC())
        }
    }

    const textareaOnChangeHandler = (ev: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updatePostTextAreaValueAC(ev.currentTarget.value))
    }


    return (
        <div className={S.PostsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElementRef}
                              placeholder={"Type your post here!"}
                              value={props.profilePageData.postTextAreaEnteringValue}
                              onChange={textareaOnChangeHandler}
                              onKeyDown={ev => ev.key === "Enter" && addPostHandler()}
                    />
                </div>
                <div>
                    <button onClick={addPostHandler}>Add Post</button>
                    {/*<button>Remove</button>*/}
                </div>
            </div>
            <div className={S.posts}>
                {posts}
            </div>
        </div>
    )
}