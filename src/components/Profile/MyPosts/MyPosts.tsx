import React from "react";
import classes from "./MyPosts.module.css";
import {Post} from "./Posts/Posts";

export const MyPosts = () => {

    return (
            <div>
                My Posts
                <div>
                    <textarea></textarea>
                    <br/>
                    <button>Add Post</button>
                    <button>Remove</button>
                </div>

                <Post message={"Hi, How are you?"} likesCount={0}/>
                <Post message={"It's my first post"} likesCount={23}/>

            </div>
    )
}