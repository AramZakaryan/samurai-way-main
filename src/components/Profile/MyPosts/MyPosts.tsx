import React from "react";
import S from "./MyPosts.module.css";
import {Post} from "./Posts/Posts";

export const MyPosts = () => {
    let postsData = [
        {id: 1, message: "Hi, How are you?", likesCount: 0},
        {id: 2, message: "It's my first post", likesCount: 23}
    ]

    let posts = postsData.map(pst => <Post message={pst.message}
                               likesCount={pst.likesCount}/>)

    return (
        <div className={S.PostsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={S.posts}>
                {posts}
            </div>
        </div>
    )
}