import React from "react";
import S from "./MyPosts.module.css";
import {Post} from "./Posts/Posts";

type MyPostsPropsType = {
    postsData: {
        id: number
        message: string
        likesCount: number
    }[]
    addPost: (postMessage: string)=>void
}

export const MyPosts:React.FC<MyPostsPropsType> = (props) => {

    let posts = props.postsData.map(pst => <Post message={pst.message}
                               likesCount={pst.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPostHandler = ()=>{
        if(newPostElement.current?.value){
        props.addPost(newPostElement.current.value)
        }
    }

    return (
        <div className={S.PostsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
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