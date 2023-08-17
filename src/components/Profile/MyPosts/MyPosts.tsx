import React from "react";
import S from "./MyPosts.module.css";
import {Post} from "./Posts/Posts";

export const MyPosts = () => {

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
            <Post message={"Hi, How are you?"} likesCount={0}/>
            <Post message={"It's my first post"} likesCount={23}/>
        </div>
        </div>
    )
}